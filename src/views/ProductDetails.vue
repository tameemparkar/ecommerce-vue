<template>
  Product details page: productid: {{ route.params.id }}

  <div v-if="product">
    {{ product }}
  </div>
  <div v-else>Product Not Found</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = computed(() => products.value.find((product) => product.id === route.params.id))

const products = ref([
  {
    id: '1',
    name: '1st Product',
    price: 1098
  },
  {
    id: '2',
    name: '2nd Product',
    price: 1098
  }
])
</script>
