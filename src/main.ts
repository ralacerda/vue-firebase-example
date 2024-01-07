import './assets/main.scss';

import App from './App.vue';
import { createApp } from 'vue';

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebaseApp';

const app = createApp(App);
app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] });

app.mount('#app');
