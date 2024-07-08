<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes.ts';

interface Props {
  title?: string,
  links: RouterLink[];
  isSecondary?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Compo app',
  isSecondary: false
})


</script>

<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
      <span v-if="$props.title"> {{ $props.title }}</span>
    </template>

    <RouterLink v-for="link in $props.links" :key="link.name" :to="link.path">
      {{ link.title }}
    </RouterLink>

  </nav>
</template>

<style scoped>
.navbar {
  top: 0;
  background-color: #333;
  left: 0;
}

.logo {
  margin-right: 15px;
  margin-left: 20px;
}

.title {
  color: rgb(237, 230, 230);
  margin-right: 30px;
  font-size: 1.5em;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
