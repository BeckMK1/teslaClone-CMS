<template>
  <div>
<NuxtLayout>
  <NuxtPage></NuxtPage>
</NuxtLayout>
  </div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
async function getProducts(){
    const {data: product} = await useFetch('http://localhost:3002/api/getAll');
    store.setProducts(product._rawValue)
	}
    getProducts()
async function getSlides(){
    const {data: slides} = await useFetch('http://localhost:3002/api/getAllSlides');
    store.setSlides(slides._rawValue)
	}
    getSlides()
</script>
<style lang="scss">
@import "assets/scss/bgs";
@import "assets/scss/inputs";
@import"assets/scss/pageStyling";
@import"assets/scss/btns";
@import"assets/scss/modal";
@import"assets/scss/toolTip";
*{
  margin: 0;
  font-family: system-ui, sans-serif;
}
body{
}
</style>