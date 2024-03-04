import {createRouter, createWebHistory} from 'vue-router/auto';
import App from '@/App.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;
