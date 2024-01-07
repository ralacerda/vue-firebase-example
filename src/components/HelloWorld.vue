<template>
  <main>
    <h1>Vue & Firebase Playground Template</h1>
    <div class="cards">
      <AuthCard />
      <FirestoreCard />
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
