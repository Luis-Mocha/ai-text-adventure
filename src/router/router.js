import { createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'startMenu',
        component: ()=> import('../pages/StartMenu.vue'),
        meta: {
            title: 'Text Adventure | Choose your Adventure'
        },
        
    },
    {
        path: '/Playground/:genre',
        name: 'playground',
        component: ()=> import('../pages/Playground.vue'),
        meta: {
            title: `Text Adventure |`
        }
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

// Titolo pagina dinamico
router.beforeEach((to, from) => {
    // accedo a meta.title , se non è definito uso il default
    document.title = to.meta.title ?? 'Text Adventure'
})

export default router