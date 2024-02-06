<template>
	<div class="contentInner">
        <VeeForm @submit="addProduct">
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="title">Title</label>
                    <VeeField type="text" name="title" v-model="title" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="title"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="subTitle">Sub title</label>
                    <VeeField type="text" name="subTitle" v-model="subTitle" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="subTitle"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="titleInfo">Title info</label>
                    <VeeField type="text" name="titleInfo" v-model="titleInfo" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="titleInfo"></VeeErrorMessage>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="Price">Price</label>
                    <VeeField type="text" name="Price" v-model="price" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="Price"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="normalPrice">Normal Price</label>
                    <VeeField type="text" name="normalPrice" v-model="normalPrice" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="normalPrice"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="isDemo">Is demo?</label>
                    <VeeField type="checkbox" v-model="isDemo" name="isDemo"></VeeField>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="image">Image</label>
                    <VeeField as="select" name="image" v-model="image" rules="file"><option v-for="imageOption in imageOptions" :value="imageOption.value">{{imageOption.label}}</option></VeeField>
                    <VeeErrorMessage name="image" class="error"></VeeErrorMessage>
                </div>
                <div class="inputContainer imageBtnContaier">
                    <div class="formBtn" @click="addImage">Add Image</div>
                    <div v-if="imageAddErrorMessage == true" class="error">Image must be a file path and a png or jpg</div>
                </div>
                <div class="inputContainer addedImageContainer">
                    <div class="formBtn" @click="openImageViewModal">View Images</div>
                    <div v-if="imageErrorMessage == true" class="error">You need to add atleast 1 image</div>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer imageBtnContaier">
                    <div class="formBtn" @click="openFilterViewModal">Add Filter</div>
                    <div v-if="filterAddErrorMessage == true" class="error">filter can not be Null</div>
                </div>
            </div>
            <div class="inputGroup">
                <div class="inputContainer">
                    <label for="mainSpec1">mainSpec 1</label>
                    <VeeField type="text" name="mainSpec1" v-model="mainSpec1" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="mainSpec1"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="mainSpec2">mainSpec2</label>
                    <VeeField type="text" name="mainSpec2" v-model="mainSpec2" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="mainSpec2"></VeeErrorMessage>
                </div>
                <div class="inputContainer">
                    <label for="mainSpec3">mainSpec3</label>
                    <VeeField type="text" name="mainSpec3" v-model="mainSpec3" rules="required"></VeeField>
                    <VeeErrorMessage class="error" name="mainSpec3"></VeeErrorMessage>
                </div>
            </div>
            <button @click="checkImagesNull" class="formBtn">Add product</button>
        </VeeForm>
        <Teleport to="body">
            <ModalsProdcutImageViewCom :imageData="images" @modalCancel="closeImageViewModal" @modalDeleteImage="deleteImage" v-if="imageModalOpen == true"></ModalsProdcutImageViewCom>
        </Teleport>
        <Teleport to="body">
            <ModalsProductFilterViewCom :filterData="filters" @modalCancel="closeFilterViewModal" @modalDeleteFilter="deleteFilter" v-if="filterModalOpen == true"></ModalsProductFilterViewCom>
        </Teleport>
        <Teleport to="body">
            <ModalsProductFilterSelectCom @cancelFilterSelect="closeFilter" @addSelectedFilter="getFilter" v-if="selectFilterOpen == true"></ModalsProductFilterSelectCom>
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
    const zipCode = ref("")
    const image = ref("")
    const images = ref([])
    const filters = ref([])
    const mainSpec1 = ref("")
    const mainSpec2 = ref("")
    const mainSpec3 = ref("")
    const imageModalOpen = ref(false)
    const filterModalOpen = ref(false)
    const imageErrorMessage = ref(false)
    const imageAddErrorMessage = ref(false)
    const filterAddErrorMessage = ref(false)
    const filterErrorMessage = ref(false)
    const selectFilterOpen = ref(false)
    const imageOptions = ref([
        {label:"Black", value:"/images/nav/cars/carBlack.png"},
        {label:"Blue", value:"/images/nav/cars/carBlue.png"},
        {label:"Red", value:"/images/nav/cars/carRed.png"},
        {label:"White", value:"/images/nav/cars/carWhite.png"},
        {label:"Sliver", value:"/images/nav/cars/carSliver.png"},
    ])
    function addImage(){
        const filePngPattern = new RegExp('([a-zA-Z]:(\\w+)*\\[a-zA-Z0_9]+)?.png')
        const fileJpgPattern = new RegExp('([a-zA-Z]:(\\w+)*\\[a-zA-Z0_9]+)?.jpg')
        if((image.value != "" && filePngPattern.test(image.value)) || (image.value != "" && fileJpgPattern.test(image.value)) ){
            images.value.push(image.value)
            image.value = ""
        }else{
            imageAddErrorMessage.value = true
        }
    }
    function getFilter(data, data2){
        console.log(data)
        filters.value = data
        zipCode.value = data2
    }
    function addFilter(){
        if(filter.value != ""){
        filters.value.push(filter.value)
        filter.value = ""
        } else {
            filterAddErrorMessage.value = false
        }
    }
    function closeFilter(){
        store.setModalOpen(false)
        selectFilterOpen.value = false
    }
    function openFilterViewModal(){
        store.setModalOpen(true)
        selectFilterOpen.value = true
    }
    function openImageViewModal(){
	store.setModalOpen(true)
	imageModalOpen.value = true
    }
    function closeFilterViewModal(){
        store.setModalOpen(false)
        filterModalOpen.value = false
    }
    function closeImageViewModal(){
	store.setModalOpen(false)
	imageModalOpen.value = false
    }
    function deleteFilter(data){
        filters.value.splice(data, 1)
    }
    function deleteImage(data){
        images.value.splice(data, 1)
    }
    function checkImagesNull(){
        if(images.value.length == 0){
            imageErrorMessage.value = true
        }else{
            imageErrorMessage.value = false
        }
    }
    function addProduct(value){
        console.log(value)
        if(images.value.length != 0){
            let tempObject = {
                contentType:"product",
                title:title.value,
                subTitle:subTitle.value,
                titleInfo:titleInfo.value,
                price:price.value,
                normalPrice:normalPrice.value,
                filters:filters.value,
                zipCode:zipCode.value,
                isDemo:isDemo.value,
                images:images.value,
                mainSpec1:mainSpec1.value,
                mainSpec2:mainSpec2.value,
                mainSpec3:mainSpec3.value,
            }
            store.setTempProducts(tempObject)
            imageErrorMessage.value = false
            title.value = ""
            subTitle.value = ""
            titleInfo.value = ""
            price.value = ""
            normalPrice.value = ""
            isDemo.value = false
            images.value = []
            filters.value = []
            zipCode.value = ""
            mainSpec1.value = ""
            mainSpec2.value = ""
            mainSpec3.value = ""
            store.setSaveBtn(true)
        }   
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
        .error{
            grid-row: 3/4;
            margin-left: 1rem;
        }
        .formBtn{
            grid-row: 2/3;
            text-align: center;
        }
    }
    .addedImageContainer{
        .error{
            grid-row: 3/4;
            margin-left: 1rem;
        }
        .formBtn{
            grid-row: 2/3;
            text-align: center;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
</style>