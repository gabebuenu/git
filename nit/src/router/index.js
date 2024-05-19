import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/sobre',
			component: () => import('../views/Sobre.vue')
		},
		{
			path: '/agenda',
			component: () => import('../views/Agenda.vue')
		},
		{
			path: '/contato',
			component: () => import('../views/Contato.vue')
		},
    {
			path: '/empreendedoris',
			component: () => import('../views/Empreendedorismo.vue')
		},
	],
})

export default router
