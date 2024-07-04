<script>
    import Button from "$lib/component/button.svelte"
    import Login from "$lib/component/login.svelte";
    
    export let form;
    $: console.log(form?.error)
    
</script>
<svelte:head>
  <title>Login</title>
</svelte:head>
<main>
    <h1>Login</h1>

    {#if form?.error}
      <div class="notice error">
        {form.error}
      </div>
    {/if}
    <Login />
    <small>Don't have an account? <a href="/register">Register here</a></small>
</main>
<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        width: 100%;
        color: #000;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        margin: 0 auto;
        padding: 20px;
    }
    small{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    a{
        color: #000;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
        
    }
</style>