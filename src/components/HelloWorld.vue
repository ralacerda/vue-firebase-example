<template>
  <main>
    <h1>Vue & Firebase Example</h1>
    <div class="cards">
      <FirestoreCard />
      <AuthCard />
      <FunctionCard />
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

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: start;
}
</style>
