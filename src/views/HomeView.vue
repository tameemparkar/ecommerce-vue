<template>
  <div class="text-green-500 bg-pink-500 font-bold">Home</div>

  <div>count: {{ globalStore.count }}</div>
  <div>doubleCount: {{ globalStore.doubleCount }}</div>

  <button @click="globalStore.increment()">Increment Counter</button>
  <button @click="globalStore.resetCounter()">Reset</button>
  <button @click="$router.push({ name: 'about' })">Go to About</button>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()
</script>
