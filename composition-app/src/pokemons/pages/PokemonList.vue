<script setup lang="ts">
import { ref } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces';
import { usePokemons } from '../composables/usePokemons';

const { count, pokemons, isLoading } = usePokemons()

</script>

<template>
  <div>
    <h1>Pokemon List - ({{ count }})</h1>

    <h3 v-if="isLoading">Cargando</h3>

    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
