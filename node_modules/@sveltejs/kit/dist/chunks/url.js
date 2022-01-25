/** @type {Record<string, string>} */
const escape_json_string_in_html_dict = {
	'"': '\\"',
	'<': '\\u003C',
	'>': '\\u003E',
	'/': '\\u002F',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\0': '\\0',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

/** @param {string} str */
function escape_json_string_in_html(str) {
	return escape(
		str,
		escape_json_string_in_html_dict,
		(code) => `\\u${code.toString(16).toUpperCase()}`
	);
}

/** @type {Record<string, string>} */
const escape_html_attr_dict = {
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;'
};

/**
 * use for escaping string values to be used html attributes on the page
 * e.g.
 * <script data-url="here">
 *
 * @param {string} str
 * @returns string escaped string
 */
function escape_html_attr(str) {
	return '"' + escape(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}

/**
 *
 * @param str {string} string to escape
 * @param dict {Record<string, string>} dictionary of character replacements
 * @param unicode_encoder {function(number): string} encoder to use for high unicode characters
 * @returns {string}
 */
function escape(str, dict, unicode_encoder) {
	let result = '';

	for (let i = 0; i < str.length; i += 1) {
		const char = str.charAt(i);
		const code = char.charCodeAt(0);

		if (char in dict) {
			result += dict[char];
		} else if (code >= 0xd800 && code <= 0xdfff) {
			const next = str.charCodeAt(i + 1);

			// If this is the beginning of a [high, low] surrogate pair,
			// add the next two characters, otherwise escape
			if (code <= 0xdbff && next >= 0xdc00 && next <= 0xdfff) {
				result += char + str[++i];
			} else {
				result += unicode_encoder(code);
			}
		} else {
			result += char;
		}
	}

	return result;
}

const absolute = /^([a-z]+:)?\/?\//;
const scheme = /^[a-z]+:/;

/**
 * @param {string} base
 * @param {string} path
 */
function resolve(base, path) {
	if (scheme.test(path)) return path;

	const base_match = absolute.exec(base);
	const path_match = absolute.exec(path);

	if (!base_match) {
		throw new Error(`bad base path: "${base}"`);
	}

	const baseparts = path_match ? [] : base.slice(base_match[0].length).split('/');
	const pathparts = path_match ? path.slice(path_match[0].length).split('/') : path.split('/');

	baseparts.pop();

	for (let i = 0; i < pathparts.length; i += 1) {
		const part = pathparts[i];
		if (part === '.') continue;
		else if (part === '..') baseparts.pop();
		else baseparts.push(part);
	}

	const prefix = (path_match && path_match[0]) || (base_match && base_match[0]) || '';

	return `${prefix}${baseparts.join('/')}`;
}

/** @param {string} path */
function is_root_relative(path) {
	return path[0] === '/' && path[1] !== '/';
}

export { escape_json_string_in_html as a, escape_html_attr as e, is_root_relative as i, resolve as r };
