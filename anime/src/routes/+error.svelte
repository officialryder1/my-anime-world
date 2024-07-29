<script>
    import { page } from '$app/stores';
</script>


<h1>{$page.status}: {$page.error.message}</h1>
<p>Server connection is currently down🤯</p>

<style>
    p{
        font-size: 1.5rem;
        text-align: center;
        color: orangered;
        font-weight: 500;
        letter-spacing: -1px;
    }
</style>