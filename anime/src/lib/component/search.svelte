<script>
	import { animeDataStore } from './store/search';
	import { createSearch } from './store/search';
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	let searchQuery = writable('');

	let searchStore;
	let animeData = [];

	const unsubscribe = animeDataStore.subscribe((data) => {
		animeData = data;
		searchStore = createSearch(animeData);
	});

	onDestroy(() => {
		unsubscribe();
	});

	const getGenreNames = (genres) => genres.map((genre) => genre.name).join(', ');

	$: filteredAnime = $searchQuery ? $searchStore.filtered : [];
</script>

<input
	type="text"
	bind:value={$searchQuery}
	on:input={() => searchStore.setSearch($searchQuery)}
	placeholder="Search for an anime..."
/>

{#if $searchQuery}
	{#each filteredAnime as anime (anime.mal_id)}
		<div>
			<a href="/{anime.mal_id}"><h2>{anime.title}</h2></a>
		</div>
	{/each}
{:else if !$searchQuery}
	<p>❤️❤️</p>
{:else}
	<p>No results found</p>
{/if}

<style>
	input {
		width: 300px;
		height: 30px;
		border: 1px solid orangered;
		border-radius: 5px;
		text-align: center;
		color: orangered;
	}
	input:hover {
		border: none;
	}

	::placeholder {
		color: orangered;
		font-weight: 500;
		letter-spacing: 1px;
	}

	a {
		text-decoration: none;
	}
</style>
