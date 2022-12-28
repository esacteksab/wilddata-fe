import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

SuperTokens.init({
    appInfo: {
        apiDomain: "http://localhost:5000",
        apiBasePath: "/v1",
        appName: "wilddata",
    },
    recipeList: [
        Session.init(),
        EmailPassword.init(),
    ],
});
