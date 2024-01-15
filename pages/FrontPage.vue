<template>
	<div class="pageSize">
		<div class="pageContent">
			<div class="content">
			<h2>Add New Slide</h2>
        	<InputsSlideInputCom></InputsSlideInputCom>
			</div>
			<div class="content">
				<h2>Edit Slides</h2>
				<AccordionsSliderAccordionContainerCom v-for="slide in store.slides" :displayTitle="slide.title" :currentSlideId="slide.slideId"></AccordionsSliderAccordionContainerCom>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()

</script>
<style lang="scss" scoped>
	.pageSize{
		width: 100%;
		height: 100%;
		background-color: hsl(0, 0%, 15%);
		display: grid;
		grid-template-columns: repeat(36, 1fr);
		border-radius: 1rem;
	}
	.pageContent{
		grid-column: 2/36;
		overflow-y: hidden;
		margin-top: 2rem;
		margin-bottom: 2rem;
		.content{
			background-color: hsl(0,0%,25%);
			height: fit-content;
			border-radius: 1rem;
			margin-bottom: 1rem;
			overflow-y: hidden;
		h2{
			padding: 1rem;
			color: white;
		}
		}
	}
</style>