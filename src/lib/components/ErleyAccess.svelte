<script>
  let email = "";
  let submitting = false;

  async function onSubmit() {
    try {
      submitting = true;

      await fetch('', {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   "Accept": "application/json",
        // },
        body: JSON.stringify({ email }),
      });

      message = "";
      alert("Form submitted");

    } finally {
      submitting = false;
    }
  }  
</script>

<form on:submit|preventDefault={onSubmit} class="mt-12 space-y-4">
  <input type="email" id="email" name="email" bind:value={email} class="input input-lg input-bordered w-full"/> 
  <button class="btn btn-primary border-4 btn-lg font-extrabold text-2xl">Early Access</button> 
</form>