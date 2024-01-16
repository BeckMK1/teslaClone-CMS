<template>
	<div class="contentInner">
        <VeeForm @submit="addProduct">
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="title">Title</label>
                    <input type="text" name="title" v-model="title" rules="required">
                    <VeeErrorMessage class="error" name="title"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="subTitle">Sub title</label>
                    <input type="text" name="subTitle" v-model="subTitle" rules="required">
                    <VeeErrorMessage class="error" name="subTitle"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="titleInfo">Title info</label>
                    <input type="text" name="titleInfo" v-model="titleInfo" rules="required">
                    <VeeErrorMessage class="error" name="titleInfo"></VeeErrorMessage>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="Price">Price</label>
                    <input type="text" name="Price" v-model="price" rules="required">
                    <VeeErrorMessage class="error" name="Price"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="normalPrice">normal Price</label>
                    <input type="text" name="normalPrice" v-model="normalPrice" rules="required">
                    <VeeErrorMessage class="error" name="normalPrice"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="isDemo">Is demo?</label>
                    <input type="checkbox" v-model="isDemo" name="isDemo">
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="image">Image</label>
                    <input type="text" name="image" v-model="image" rules="required|link">
                    <VeeErrorMessage class="error" name="image"></VeeErrorMessage>
                </div>
                <div class="inputContainer imageBtnContaier">
                    <div class="formBtn" @click="addImage">Add Image</div>
                </div>
                <div class="inputContainer addedImageContainer">
                    <div class="formBtn" @click="openImageViewModal">View Images</div>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="mainSpec1">mainSpec 1</label>
                    <input type="text" name="mainSpec1" v-model="mainSpec1" rules="required">
                    <VeeErrorMessage class="error" name="mainSpec1"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="mainSpec2">mainSpec2</label>
                    <input type="text" name="mainSpec2" v-model="mainSpec2" rules="required">
                    <VeeErrorMessage class="error" name="mainSpec2"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="mainSpec3">mainSpec3</label>
                    <input type="text" name="mainSpec3" v-model="mainSpec3" rules="required">
                    <VeeErrorMessage class="error" name="mainSpec3"></VeeErrorMessage>
                </div>
            </div>
            <button class="formBtn">Add product</button>
        </VeeForm>
        <Teleport to="body">
            <ModalsProdcutImageViewCom :imageData="images" @modalCancel="closeImageViewModal" @modalDeleteImage="deleteImage" v-if="imageModalOpen == true"></ModalsProdcutImageViewCom>
        </Teleport>
	</div>
</template>
<script setup>
	import { useStore } from "@/store/glStore"
	const store = useStore()
    const title = ref("")
    const subTitle = ref("")
    const titleInfo = ref("")
    const price = ref("")
    const normalPrice = ref("")
    const isDemo = ref("")
    const image = ref("")
    const images = ref(["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"])
    const mainSpec1 = ref("")
    const mainSpec2 = ref("")
    const mainSpec3 = ref("")
    const imageModalOpen = ref(false)
    function addImage(){
        if(image.value != ""){
            images.value.push(image.value)
            image.value = ""
        }
    }
    function openImageViewModal(){
	store.setModalOpen(true)
	imageModalOpen.value = true
    }
    function closeImageViewModal(){
	store.setModalOpen(false)
	imageModalOpen.value = false
    }
    function deleteImage(data){
        images.value.splice(data, 1)
    }
    function addProduct(){

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
    .inputGroup{
            grid-template-columns: 1fr 1fr 1fr;
    }
    .imageBtnContaier{
        .formBtn{
            grid-row: 2/3;
            text-align: center;
        }
    }
    .addedImageContainer{
        .formBtn{
            grid-row: 2/3;
            text-align: center;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
</style>