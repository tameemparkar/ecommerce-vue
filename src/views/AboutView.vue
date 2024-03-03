<template>
  <div class="text-green-500">ABOUT</div>

  <div>count: {{ globalStore.count }}</div>
  <div>doubleCount: {{ globalStore.doubleCount }}</div>

  <button @click="globalStore.count++">Increment Counter</button>
  <button @click="$router.push({ name: 'home' })">Go to Home</button>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()
</script>
