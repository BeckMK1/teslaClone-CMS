<template>
	<div>
		<div class="accordion">
			<div class=" title" @click="isOpen = !isOpen">
				<p>{{ displayTitle }}</p>
				<font-awesome-icon :class=" isOpen == true ? 'arrowOpen' : ''" icon="fa-solid fa-chevron-down" />
			</div>
			<div class="content">
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
					<VeeField name="btnLink1" v-model="btn1Link" type="text" rules="required|link"></VeeField>
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
					<VeeField name="btnLink2" v-model="btn2Link" type="text" rules="required|link"></VeeField>
					<VeeErrorMessage class="error" name="btnLink2"></VeeErrorMessage>
				</div>
			</div>
			<button class="formBtn">Update Slide</button>
					</VeeForm>
					<button @click="openDeleteModal" class="deleteBtn">Remove</button>
				</div>
			</div>
		</div>
		<Teleport to="body">
			<ModalsDeleteCom @modalDelete="removeSlide" @modalCancel="closeDelete" v-if="DeleteOpen == true"></ModalsDeleteCom>
		</Teleport>
	</div>
</template>
<script setup>
const isOpen = ref(false)
import { useStore } from "@/store/glStore"
const store = useStore()
const props = defineProps({
	displayTitle:{
		default:"",
		type:String
	},
	currentSlideId:{
		default:0,
		type:Number
	}
})
const DeleteOpen = ref(false)
const title = ref("")
const image = ref("")
const btn1Title = ref("")
const btn1Link = ref("")
const btn2Title = ref("")
const btn2Link = ref("")

function setInputDefault(){
	for(let slide of store.slides){
	if(props.currentSlideId == slide.slideId){
		title.value = slide.title
		image.value = slide.image
		btn1Title.value = slide.btn1Title
		btn1Link.value = slide.btn1Link
		btn2Title.value = slide.btn2Title
		btn2Link.value = slide.btn2Link
	}
}
}
function onSubmit(){
	for(let slide of store.slides){
		 slide.title = title.value 
		 slide.image = image.value
		 slide.btn1Title = btn1Title.value 
		 slide.btn1Link = btn1Link.value 
	 	 slide.btn2Title = btn2Title.value
		 slide.btn2Link = btn2Link.value
	}
}
function removeSlide(){
	store.deleteSlide(props.currentSlideId - 1)
	store.setModalOpen(false)

}
setInputDefault()
function openAccordion(){
	const accordionConten =	document.querySelector(".accordion .contentInner").offsetHeight;
		const accordion = document.querySelector(".accordion .content");
	if(isOpen.value == true){
		accordion.style.height = accordionConten + "px";
	}else {
		accordion.style.height = "0px";
	}
}
function openDeleteModal(){
	store.setModalOpen(true)
	DeleteOpen.value = true
}
function closeDelete(){
	store.setModalOpen(false)
	DeleteOpen.value = false
}
onMounted(()=>{
	openAccordion()
})
watch(isOpen, async(newValue, oldValue)=>{
	if(newValue != oldValue){
		openAccordion()
	}
})
</script>
<style lang="scss" scoped>
	.accordion{
		background-color: hsl(0, 0%, 20%);
		height: 100%;
		margin: 1rem;
		border-radius: 1rem;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
			.arrowOpen{
				transform: rotate(-90deg);
				transition: 250ms;
			}
			svg{
				color: white;
				transition: 250ms;
			}
			p{
				color: white;
				font-size: 1.2rem;
			}
		}
		.content{
			background-color: hsl(0, 0%, 30%);
			overflow-y: hidden;
			transition: 500ms;
			box-sizing: border-box;
			border-radius: 1rem;
			.contentInner{
				padding: 1rem;
				.deleteBtn{
					background-color: hsl(0,100%, 35%);
					border: 1px solid transparent;
					padding: 0.5rem ;
					color: white;
					font-size: 1.1rem;
					margin-top: 1rem;
					border-radius: 0.5rem;
					cursor: pointer;
				}
			}
		}
	}
</style>