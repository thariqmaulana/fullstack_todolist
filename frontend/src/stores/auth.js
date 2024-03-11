import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const message = ref('');
  

  return {isAuth, message};
});