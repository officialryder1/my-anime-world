import { writable } from 'svelte/store';

export const createSearch = (initialData) => {
    const { subscribe, set, update } = writable({
      data: initialData,
      filtered: initialData,
      search: ''
    });
  
    return {
      subscribe,
      setSearch: (query) => {
        update(state => {
          const filtered = state.data.filter(anime =>
            anime.title.toLowerCase().includes(query.toLowerCase())
          );
          return { ...state, search: query, filtered };
        });
      }
    };
  };

export const animeDataStore = writable([])