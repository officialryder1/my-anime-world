<script>
    import "../style.css"
    import Nav from "../lib/component/nav.svelte";
</script>
<main>
    <Nav/>
    <slot></slot>
</main>
<style>
    main{
        margin: 0 auto;
        padding: 20px;
    }
</style>