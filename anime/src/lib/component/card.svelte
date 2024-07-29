<script>
    export let title = "Card Title";
    export let description = "";
    export let imageUrl = "";
</script>

<div class="card">
    {#if imageUrl}
   <img src={imageUrl} alt={title} class="card-image"/>
    {/if}
    <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">{description}</p>
     
        <slot></slot> <!-- Slot for additional content like buttons -->
    </div>
</div>

<style>
    .card {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 300px;
        margin: 1em;
    }

    .card-image {
        width: 100%;
        height: 20%;
    }

    .card-content {
        padding: 1em;
    }

    .card-title {
        font-size: 1.25em;
        margin: 0 0 0.5em 0;
    }

    .card-description {
        font-size: 1em;
        margin: 0 0 1em 0;
    }

</style>
