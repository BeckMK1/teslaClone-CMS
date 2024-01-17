<template>
<div class="pageSize">
		<div class="pageContent">
			<div class="content">
			<h2>Add New Prodcut</h2>
			<InputsProductInputCom></InputsProductInputCom>
			</div>
			<div class="content">
				<AccordionsAccordionProductCom v-for="(product, index) in store.products" :displayTitle="product.title" :currentSlideId="index"></AccordionsAccordionProductCom>
			</div>
			<button class="btn saveBtn" @click="PostToDb">Save to database</button>
		</div>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()
	function PostToDb(){
			for(let product of store.products){
			$fetch('http://localhost:3002/api/post', {
				method:'POST',
				body:product
			})
		}
	}
</script>
<style lang="scss" scoped>


</style>