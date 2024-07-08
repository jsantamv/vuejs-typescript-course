import { computed, ref } from 'vue'
import { getPokemons } from "../helpers/get-pokemons";
import type { Pokemon } from "../interfaces";

export const usePokemons = () => {

    const pokemons = ref<Pokemon[]>([])
    const isLoading = ref(true);

    getPokemons().then(data => {
        pokemons.value = data;
        isLoading.value = false;
    });

    return {
        pokemons,
        isLoading,
        count: computed(() => pokemons.value.length)        
    }
}

