<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(5)
const increase = () => counter.value++

// export default defineComponent({
//     setup() {
//         const counter = ref(5);

//         const increase = () => {
//             counter.value++;
//         }

//         return {
//             counter,
//             increase
//         }
//     }
// })
</script>

<template>
  <h1>Counter view: {{ counter }}</h1>

  <button class="custom-button" @click="increase">+1</button>
</template>

<style scoped>
.custom-button {
  background-color: #4CAF50; /* Verde */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #45a049; /* Verde más oscuro al pasar el cursor */
}

.custom-button:active {
  background-color: #3e8e41; /* Verde aún más oscuro cuando se hace clic */
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.custom-button:focus {
  outline: none;
}
</style>
