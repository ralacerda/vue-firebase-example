<script setup lang="ts">
import PinapleIcon from '~icons/mdi/fruit-pineapple';

const counterStore = useCounterStore();
</script>

<template>
  <main>
    <h1>Vue 3 Playground Template</h1>
    <div class="card-wrapper">
      <div class="card">
        <h2><PinapleIcon style="color: yellow" /> Pinia Store</h2>
        <p>Count is {{ counterStore.count }}</p>
        <button @click="counterStore.increment">Hello</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  gap: 2rem;
  margin-top: 4rem;
}
</style>
