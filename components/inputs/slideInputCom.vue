<template>
	<div class="contentInner">
		<VeeForm @submit="onSubmit">
			<div class="inputGroup">
				<div class="inputContainer">
					<label for="title">Title</label>
					<VeeField name="title" type="text" v-model="title" rules="required"></VeeField>
					<VeeErrorMessage class="error" name="title"></VeeErrorMessage>
				</div>
				<div class="inputContainer">
					<label for="imageLink">Image Link</label>
					<VeeField name="imageLink" v-model="image" type="text" rules="required|link"></VeeField>
					<VeeErrorMessage class="error" name="imageLink"></VeeErrorMessage>
				</div>
			</div>
			<div class="inputGroup">
				<div class="inputContainer">
					<label for="btnTitle1">Btn 1 title</label>
					<VeeField name="btnTitle1" v-model="btn1Title" type="text" rules="required"></VeeField>
					<VeeErrorMessage class="error" name="btnTitle1"></VeeErrorMessage>
				</div>
				<div class="inputContainer">
					<label for="btnLink1">Btn 1 Link</label>
					<VeeField name="btnLink1" v-model="btn1Link" type="text" rules="required"></VeeField>
					<VeeErrorMessage class="error" name="btnLink1"></VeeErrorMessage>
				</div>
			</div>
			<div class="inputGroup">
				<div class="inputContainer">
					<label for="btnTitle2">Btn 2 title</label>
					<VeeField name="btnTitle2" v-model="btn2Title" type="text" rules="required"></VeeField>
					<VeeErrorMessage class="error" name="btnTitle2"></VeeErrorMessage>
				</div>
				<div class="inputContainer">
					<label for="btnLink2">Btn 2 Link</label>
					<VeeField name="btnLink2" v-model="btn2Link" type="text" rules="required"></VeeField>
					<VeeErrorMessage class="error" name="btnLink2"></VeeErrorMessage>
				</div>
				<div class="inputContainer">
					<label for="navColor">Nav Color</label>
					<VeeField name="navColor" v-model="navColor" as="select" rules="required">
					<option value="BlackText">Black</option>
					<option value="WhiteText">White</option>
					</VeeField>
					<VeeErrorMessage class="error" name="navColor"></VeeErrorMessage>
				</div>
			</div>
			<button class="formBtn">Add Slide</button>
		</VeeForm>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()
	const title = ref("")
	const image = ref("")
	const video = ref("")
	const btn1Title = ref("")
	const btn1Link = ref("")
	const btn2Title = ref("")
	const btn2Link = ref("")
	const navColor  = ref("")
	function onSubmit() {
		let tempObject = {
			contentType:"slide",
			title: title.value,
			image: image.value,
			video: video.value,
			btn1Title: btn1Title.value,
			btn1Link: btn1Link.value,
			btn2Title:btn2Title.value,
			btn2Link:btn2Link.value,
			colors:navColor.value,
			active:false
		}
		store.setAddSlides(tempObject)
		store.setSaveBtn(true)
		title.value = "",
		image.value = "",
		video.value = "",
		btn1Title.value = "",
		btn1Link.value = "",
		btn2Title.value = "",
		btn2Link.value = ""
	}
</script>
<style lang="scss" scoped>
	.contentInner{
		height: fit-content;
		box-sizing: border-box;
		padding: 1rem;
			p{
				color: white;
			}
	}
</style>