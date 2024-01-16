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
	div{}
</style>