<script setup lang="ts">
import PokemonCardList from "../components/PokemonCardList.vue";
import store from "@/store/store";

//const { count, pokemons, isLoading, isError, error } = usePokemons();


store.startLoadingPokemons()



</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Loading</h1>

  <div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
  </div>

  <div v-else>
    <h1>Pokemon List - Native ({{ store.pokemons.count }})</h1>

    <PokemonCardList :pokemons="store.pokemons.list ?? []" />
  </div>
</template>
