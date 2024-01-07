<script setup lang="ts">
import FireIcon from '~icons/mdi/fire';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useCollection, useFirestore } from 'vuefire';

const db = useFirestore();
const sortOption = ref('evaluation');

const sortOptions = [
  { name: 'Evaluation', value: 'evaluation' },
  { name: 'Employees', value: 'employees' },
  { name: 'Stock price', value: 'stockPrice' },
];

const companyQuery = computed(() => {
  return query(collection(db, 'companies'), orderBy(sortOption.value, 'desc'), limit(3));
});

const topCompanies = useCollection(companyQuery);

const currentFormater = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

const numberFormater = new Intl.NumberFormat();

const dateFormater = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
});
</script>

<template>
  <BaseCard width="400px">
    <template #title> <FireIcon style="color: #f78200" /> Firestore </template>
    <p>Top 3 Random Companies</p>
    <div class="sort-form">
      <small>Sort by</small>
      <select v-model="sortOption">
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.name }}
        </option>
      </select>
    </div>
    <ul>
      <li v-for="company in topCompanies" :key="company.id">
        <h3
          :style="`color: hsl(${company.color.hue}, ${company.color.saturation}%, ${company.color.lightness}%);`"
        >
          {{ company.name }}
        </h3>
        <p>Evaluation: {{ currentFormater.format(company.evaluation) }}</p>
        <p>Company Size: {{ numberFormater.format(company.employees) }} employees</p>
        <p>Stock Price: {{ company.stockPrice }}</p>
        <p>Found Date: {{ dateFormater.format(company.foundDate.toDate()) }}</p>
      </li>
    </ul>
  </BaseCard>
</template>

<style scoped>
.userPhoto {
  width: 6rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--color-itens);
  margin-inline: auto;
}

.login-error {
  color: rgb(228, 93, 93);
}

ul {
  list-style: none;
  text-align: left;
}

li {
  margin-bottom: 2rem;
}

h3 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.sort-form {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
</style>
