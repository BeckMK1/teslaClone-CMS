<template>
	<div>
		<div class="accordion" :class="'accordionProduct-' + currentSlideId">
			<div class=" title" @click="isOpen = !isOpen">
				<p>{{ displayTitle }}</p>
				<font-awesome-icon :class=" isOpen == true ? 'arrowOpen' : ''" icon="fa-solid fa-chevron-down" />
			</div>
			<div class="content" :class="'contentProduct-'+ currentSlideId">
				<div class="contentInner">
                <VeeForm @submit="editPorduct">
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
            <button class="formBtn">Edit product</button>
        </VeeForm>
        <Teleport to="body">
            <ModalsProdcutImageViewCom :imageData="images" @modalCancel="closeImageViewModal" @modalDeleteImage="deleteImage" v-if="imageModalOpen == true"></ModalsProdcutImageViewCom>
        </Teleport>
					<button @click="openDeleteModal" class="deleteBtn">Remove</button>
				</div>
			</div>
		</div>
		<Teleport to="body">
			<ModalsDeleteCom @modalDelete="removeProduct" @modalCancel="closeDelete" v-if="DeleteOpen == true"></ModalsDeleteCom>
		</Teleport>
	</div>
</template>
<script setup>
const isOpen = ref(false)
import { useStore } from "@/store/glStore"
const store = useStore()
const checkProducts = computed(()=>store.productsGot)
const props = defineProps({
	displayTitle:{
		default:"",
		type:String
	},
	currentSlideId:{
		default:0,
		type:Number
	},
    productId:{
        default:"",
        type:String
    }
})
const DeleteOpen = ref(false)
    const title = ref("")
    const subTitle = ref("")
    const titleInfo = ref("")
    const price = ref("")
    const normalPrice = ref("")
    const isDemo = ref("")
    const image = ref("")
    const images = ref([])
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
async function getProducts(){
    const {data: product} = await useFetch('http://localhost:3002/api/getAll');
    store.setProducts(product._rawValue)
    store.setProductGot(true)
}
function deleteImage(){
    $fetch('http://localhost:3002/api/deleteProduct/'+ props.productId, {
		method:'DELETE',
	}).then(()=>{
		getProducts()
		store.setModalOpen(false)
		DeleteOpen.value = false
	})
    // for(let [index, product] of store.products.entries()){
    //     if(props.currentSlideId == index){
    //         product.images.splice(data, 1)
    //     }
    // }
}
function setInputDefault(){
    if(typeof props.currentSlideId === "string" ){
		for(let [index, product ] of store.tempProducts.entries()){
            if(props.currentSlideId == 'tempProduct-' + index){
                title.value = product.title
                subTitle.value = product.subTitle
                titleInfo.value = product.titleInfo
                price.value = product.price
                normalPrice.value = product.normalPrice
                isDemo.value = product.isDemo
                images.value = product.images
                mainSpec1.value = product.mainSpec1
                mainSpec2.value = product.mainSpec2
                mainSpec3.value = product.mainSpec3
            }
        }
    }
    if(typeof props.currentSlideId === "number" ){
        for(let [index, product] of store.products.entries()){
            if(props.currentSlideId == index){
                title.value = product.porduct.title
                subTitle.value = product.porduct.subTitle
                titleInfo.value = product.porduct.titleInfo
                price.value = product.porduct.price
                normalPrice.value = product.porduct.normalPrice
                isDemo.value = product.porduct.isDemo
                images.value = product.porduct.images
                mainSpec1.value = product.porduct.mainSpec1
                mainSpec2.value = product.porduct.mainSpec2
                mainSpec3.value = product.porduct.mainSpec3
            }
        }
    }
}
function editPorduct(){
	for(let product of store.products){
        product.porduct.title = title.value 
	}
    let tempObject = {
        title: title.value,
        subTitle:subTitle.value,
        titleInfo:titleInfo.value,
        price:price.value,
        normalPrice:normalPrice.value,
        isDemo:isDemo.value,
        images:images.value,
        mainSpec1:mainSpec1.value,
        mainSpec2:mainSpec2.value,
        mainSpec3:mainSpec3.value
    }
    $fetch('http://localhost:3002/api/upadateProduct/'+ props.productId, {
		method:'PATCH',
		body:{porduct:tempObject},
	})
}
function removeProduct(){
	store.deleteProduct(props.currentSlideId)
	store.setModalOpen(false)

}
function openAccordion(){
    const accordion = document.querySelectorAll(".contentProduct-" + props.currentSlideId);
    for(let content of accordion){
        const accordionConten =	content.querySelector(".contentInner").offsetHeight;

	if(isOpen.value == true){
		content.style.height = accordionConten + "px";
	}else {
		content.style.height = "0px";
	}
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
setInputDefault()

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