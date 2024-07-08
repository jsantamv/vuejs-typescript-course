<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import type { RouterLink } from "@/router/list-routes";
import { pokemonRoutes } from "../router";

const routerLinks: RouterLink[] =

  pokemonRoutes.children?.map((link) => {
    const { name, path, props } = link;

    return {
      name: name?.toString() ?? "",
      path: path,
      title: (props as { title: string }).title,
    };
  }) || [];

</script>

<template>
  <NavBar :links="routerLinks" is-secondary />
  <div>
    <RouterView />
  </div>
</template>
