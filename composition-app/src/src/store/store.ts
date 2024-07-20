import { getPokemons } from "@/pokemons/helpers/get-pokemons";
import type { Pokemon } from "@/pokemons/interfaces";
import { reactive } from "vue";

interface Store {
    //state
    pokemons: {
        count: number;
        errorMessage: string | null;
        hasError: boolean;
        isLoading: boolean;
        list: Pokemon[];
    }

    //actions / Metodos
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsError: (data: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: false,
        list: []
    },
    startLoadingPokemons: async function (): Promise<void> {
        const pokemons = await getPokemons();
        this.loadedPokemons(pokemons);
    },
    loadedPokemons: function (data: Pokemon[]): void {
        this.pokemons = {
            count: data.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: data
        }
    },
    loadPokemonsError: function (data: string): void {
        this.pokemons ={
            ...this.pokemons,
            errorMessage: data,
            hasError: true,
            isLoading: false
        }   
    }
});

export default store;