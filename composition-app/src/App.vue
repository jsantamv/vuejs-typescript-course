<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar title="PokemonApp" />
  </header>

  <RouterView />
</template>
