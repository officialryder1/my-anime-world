<script>
    import Button from "$lib/component/button.svelte"

    function greetUser(){
        let message = "hello world"
        alert(message)
    }

</script>
<svelte:head>
    <title>Home</title>
</svelte:head>
<main>

    <Button style="danger" shadow={true} invert={false} on:click={greetUser}>Click me</Button>
</main>
<style>
    
</style>