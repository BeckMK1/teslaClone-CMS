<template>
	<div class="pageSize">
		<div class="pageContent">
			<div class="content">
			<h2>Add New Slide</h2>
        	<InputsSlideInputCom></InputsSlideInputCom>
			</div>
			<div class="content">
				<h2>Edit Slides</h2>
				<AccordionsSliderAccordionContainerCom v-for="(slide, index) in store.slides" :slideId="slide._id" :displayTitle="slide.slides.title" :currentSlideId="index"></AccordionsSliderAccordionContainerCom>
				<AccordionsSliderAccordionContainerCom v-for="(slide, index) in store.tepmSlides" :displayTitle="slide.title" :currentSlideId="'slideTemp' + index"></AccordionsSliderAccordionContainerCom>
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
	const checkProducts = computed(()=>store.tepmSlides.length)
	async function getSlides(){
    const {data: slides} = await useFetch('http://localhost:3002/api/getAllSlides');
    store.setSlides(slides._rawValue)
	}
	function PostToDb(){
			for(let slide of store.tepmSlides){
			$fetch('http://localhost:3002/api/postSlides', {
				method:'POST',
				body:slide
			}).then(()=>{
				store.resetAddSlides()
				getSlides()
			})
		}
		store.setSaveBtn(false)
	}
	
</script>
<style lang="scss" scoped>
	div{}
</style>