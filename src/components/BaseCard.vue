<script setup lang="ts">
const props = defineProps<{
  width?: string;
}>();
</script>

<template>
  <div class="card">
    <h2><slot name="title" /></h2>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-itens);
  width: v-bind('props.width || "300px"');
  text-align: center;
}
</style>
