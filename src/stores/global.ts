import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  function resetCounter() {
    count.value = 0
  }

  return { count, doubleCount, increment, resetCounter }
}, {
  persist: true
})
