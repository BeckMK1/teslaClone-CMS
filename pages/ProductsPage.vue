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
		</div>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()
</script>
<style lang="scss" scoped></style>