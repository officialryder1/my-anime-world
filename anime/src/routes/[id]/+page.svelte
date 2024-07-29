<script>
    import Card from '../../lib/component/card.svelte';
    export let data

    $: anime = data?.anime.data
    $: error = data?.error
 

    const maxLength = 200;
    let showFullDescription = false;

    const getShortDescription = (text, maxLength) =>{
        if(text.length <= maxLength){
            return text
        }
        return text.slice(0, maxLength) + '...'
    }
    
    $: shortDescription = getShortDescription(anime.synopsis, maxLength)

    // toggle the description
    const toggleDescription = () =>{
        showFullDescription = !showFullDescription
    }
    const getGenreNames = (genres) => genres.map(genre => genre.name).join(', ');
</script>

<svelte:head>
    <title>{anime.title}</title>
</svelte:head>

<main>
    <div class="anime-detail">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <h1>{anime.title}</h1>
        <p>Genres: {getGenreNames(anime.genres)}</p>
        <small>Score: {anime.score}</small><br>
        <small>Rank: {anime.rank}</small><br>
        <small>Favorites: {anime.favorites}</small><br>
        <small>Aired: {anime.aired.string}</small><br><br>
        <a href="{anime.trailer.url}" target="_blank">Watch trailer</a>
        <p>Description: {showFullDescription ? anime.synopsis : shortDescription}</p>
        {#if anime.synopsis.length > maxLength}
            <button on:click={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Continue Reading'}
            </button>
        {/if}
    </div>
    {#if error}
        <p>{error}</p>
    {/if}
</main>

<style>
    .anime-detail {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        display: block;
        margin: 0px auto;
    }

    h1 {
        margin: 20px 0;
    }

    p {
        margin: 10px 0;
    }

    a {
        color: #007bff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>





