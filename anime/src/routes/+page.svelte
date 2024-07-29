<script>
    import Card from "../lib/component/card.svelte";
    export let data;

    $: animes = data?.anime.data;
    $: pagination = data?.pagination;
    console.log(animes)

    const getGenreNames = (genres) => genres.map(genre => genre.name).join(', ');


    function handleNextPage() {
        if (pagination.has_next_page) {
            window.location.href = `?page=${pagination.current_page + 1}`;
        }
    }

    function handlePreviousPage() {
        if (pagination.current_page > 1) {
            window.location.href = `?page=${pagination.current_page - 1}`;
        }
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<main>
    {#if animes}
        <div class="pagination">
            <button on:click={handlePreviousPage} disabled={pagination.current_page === 1}>Previous</button>
            <button on:click={handleNextPage} disabled={!pagination.has_next_page}>Next</button>
        </div>
        <div class="col">
            {#each animes as anime (anime.mal_id)}
                <a href="/{anime.mal_id}"><Card
                    imageUrl={anime.images.jpg.image_url}
                    title={anime.title}
                >
                
                    <p>Genres: {getGenreNames(anime.genres)}</p>
                    <small>Score: {anime.score}</small><br>
                    <small>Rank: {anime.rank}</small><br>
                    <small>Favorites: {anime.favorites}</small><br>
                    <small>Aired: {anime.aired.string}</small>
                </Card></a>
            {/each}
        </div>
    {:else}
        <p>No animes found</p>
    {/if}
</main>

<style>
    .col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .pagination {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:disabled {
        background-color: #cccccc;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
</style>
