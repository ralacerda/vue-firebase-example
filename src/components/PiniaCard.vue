<script setup lang="ts">
import PinapleIcon from '~icons/mdi/fruit-pineapple';

const counterStore = useCounterStore();
</script>

<template>
  <BaseCard>
    <template #title> <PinapleIcon style="color: #ffe266" /> Pinia Store </template>
    <p>Count is {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Hello</button>
  </BaseCard>
</template>
