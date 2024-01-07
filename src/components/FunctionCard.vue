<script setup lang="ts">
import CloudIcon from '~icons/mdi/cloud';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();
const number = ref(5);
const result = ref();
const running = ref(false);

const operations = [
  { name: 'Get squared value', value: 'getSquared' },
  { name: 'Get square root', value: 'getSquareRoot' },
  { name: 'Get cube', value: 'getCube' },
  { name: 'Get cube root', value: 'getCubeRoot' },
];

const choosenOperation = ref('getSquared');

async function calculate() {
  running.value = true;
  result.value = undefined;
  const operationCloudFunction = httpsCallable(functions, choosenOperation.value);
  const response = await operationCloudFunction({ number: number.value });
  running.value = false;
  result.value = response.data;
}
</script>

<template>
  <BaseCard>
    <template #title> <CloudIcon style="color: #fcd970" /> Firebase Functions </template>
    <p>Pick an operation and a number</p>
    <select v-model="choosenOperation">
      <option v-for="operation in operations" :key="operation.value" :value="operation.value">
        {{ operation.name }}
      </option>
    </select>
    <input v-model="number" type="number" />
    <button @click="calculate">Calculate</button>
    <small>Result</small>
    <div v-if="result !== undefined && !running">
      <div class="result">{{ result }}</div>
    </div>
    <div v-if="running && result === undefined">
      <small>Calculating...</small>
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.result {
  color: #fcd970;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
