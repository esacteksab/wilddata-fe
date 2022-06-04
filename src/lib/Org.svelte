<script>
  // create a prop
  export let org;
</script>

<foo class="py-4 text-lg">
  <p>
    <a class="underline text-orange-600" href="o/{org.Name}"
      >Name: {org.DisplayName}</a
    >
  </p>
  <p>EMail: {org.EMail}</p>
  <br />
  <hr />
</foo>
