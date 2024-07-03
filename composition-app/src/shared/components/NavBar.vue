<script setup lang="ts">

  interface Props {
    title?:string;
  }

  defineProps<Props>();

</script>




<template>
  <nav class="navbar">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <span class="title">Compo App</span>

    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link">About</RouterLink>
    <RouterLink to="/counter" class="nav-link">Counter</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  background-color: #333;
  left: 0;
  /*display: flex;
  align-items: center;
  padding: 10px;
  z-index: 1000;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem; */
}

.logo {
  margin-right: 15px;
  margin-left: 20px;
}

.title {
  color: white;
  margin-right: 30px;
  font-size: 1.5em;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
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
