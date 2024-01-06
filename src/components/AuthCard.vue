<script setup lang="ts">
import LockIcon from '~icons/mdi/lock';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const currentUser = useCurrentUser();
const auth = useFirebaseAuth()!;

const loginPassword = ref<string>('');
const loginUser = ref('paul@beatles.com');
const loginError = ref<string>();

const users = ['paul@beatles.com', 'john@beatles.com', 'george@beatles.com', 'ringo@beatles.com'];

async function login() {
  try {
    await signInWithEmailAndPassword(auth, loginUser.value, loginPassword.value);
  } catch (error) {
    if (error instanceof Error) {
      loginError.value = error.message;
    } else throw error;
  }
}

function logout() {
  signOut(auth);
}
</script>

<template>
  <BaseCard>
    <template #title> <LockIcon style="color: #fcc727" /> Vuefire Auth </template>
    <template v-if="currentUser">
      <p>Logged in as {{ currentUser.displayName }}</p>
      <img v-if="currentUser.photoURL" :src="currentUser.photoURL" class="userPhoto" />
      <button @click="logout">Logout</button>
    </template>
    <template v-else>
      <select v-model="loginUser">
        <option v-for="userEmail in users" :key="userEmail">{{ userEmail }}</option>
      </select>
      <input v-model="loginPassword" type="password" />
      <small>Password for all users is "password"</small>
      <button @click="login">Login</button>
      <small v-if="loginError" class="login-error">{{ loginError }}</small>
    </template>
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
</style>
