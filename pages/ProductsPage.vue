<template>
<div class="pageSize">
		<div class="pageContent">
			<div class="content">
			<h2>Add New Prodcut</h2>
			<InputsProductInputCom></InputsProductInputCom>
			</div>
			<div class="content">
				<AccordionsAccordionProductCom v-for="(product, index) in store.products" :displayTitle="product.porduct.title" :productId="product._id" :currentSlideId="index"></AccordionsAccordionProductCom>
				<AccordionsAccordionProductCom v-for="(product, index) in store.tempProducts" :displayTitle="product.title" :currentSlideId="'tempProduct-' + index"></AccordionsAccordionProductCom>
			</div>
		</div>
		<Teleport to="body">
			<div class="saveBtnContainer" v-if="showSaveBtn == true">
				<button class="btn saveBtn" @click="PostToDb">Save to database</button>
			</div>
		</Teleport>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()
	const showSaveBtn = computed(()=>store.isSaveBtn)
	async function getProducts(){
    const {data: product} = await useFetch('http://localhost:3002/api/getAll');
    store.setProducts(product._rawValue)
	}
	function PostToDb(){
			for(let product of store.tempProducts){
			$fetch('http://localhost:3002/api/post', {
				method:'POST',
				body:product
			}).then(()=>{
				getProducts()
				store.setResetProduct()
			})
		}
		store.setSaveBtn(false)
	}
</script>
<style lang="scss" scoped>


</style>