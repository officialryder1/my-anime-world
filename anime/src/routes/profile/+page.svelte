<script>
    export let data
    $:console.log(data.user.email)
   
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<h1>Guarded page</h1>
<p>This page is guarded and will only be accessible to authenticated users.</p>

{#if data}
    <p>Hello {data.user.email}</p>
{/if}
