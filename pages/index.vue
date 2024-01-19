<template>
	<div class="pageSize">
		<div class="pageContent">
			<div class="content">
				<div>
					<h2>Front page slides</h2>
					<AccordionsAccordionShowDataCom v-for="(slide, index) in store.slides" :index="index"  :displayTitle="slide.slides.title" :constentType="slide.slides.contentType" :showData="slide.slides"></AccordionsAccordionShowDataCom>
				</div>
				<div>
					<h2>Product page products</h2>
					<AccordionsAccordionShowDataCom v-for="(product, index) in store.products" :index="index"  :displayTitle="product.porduct.title" :constentType="product.porduct.contentType" :showData="product.porduct"></AccordionsAccordionShowDataCom>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()

</script>
<style lang="scss" scoped>
.content{
	display: grid;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
	padding-bottom: 2rem;
}
</style>