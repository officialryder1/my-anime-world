<script>
    import Register from "$lib/component/register.svelte";
    
    export let form;
    $: console.log(form?.error)
</script>
<svelte:head>
<title>Register</title>
</svelte:head>
<main>
    <h1>Register</h1>
    {#if form?.error}
        <div class="error">
            {form.error}
        </div>
    {/if}
    <Register/>
    <small>Already have an account? <a href="/login">login </a></small>
</main>
<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        width: 100%;
        background-color: #fff;
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
    .error{
        font-weight: 100;
        font-size: 12x;
        background-color: #e85673;
        text-align: center;
        width: 100%;
        height: 30px;
        padding: 5px;
        color: #fff;
        padding-top: 3%;
    }
</style>