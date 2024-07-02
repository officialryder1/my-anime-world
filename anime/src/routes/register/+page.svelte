<script>
    import Button from "$lib/component/button.svelte"
    import Register from "$lib/component/register.svelte";
    
</script>

<main>
    <h1>Register</h1>
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
</style>