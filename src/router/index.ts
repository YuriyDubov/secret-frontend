import { createRouter, createWebHistory } from 'vue-router';
import SecretMessagePostComponent from '../components/PostSecretMessageComponent.vue';
import ViewSecretMessageComponent from '../components/ViewSecretMessageComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'messagePost',
      component: SecretMessagePostComponent
    },
    {
      path: '/:id',
      name: 'viewMessage',
      component: ViewSecretMessageComponent
    }
  ]
})

export default router
