<template>
	<div>
		<div class="accordion">
			<div class=" title" @click="isOpen = !isOpen">
				<p>{{ displayTitle }}</p>
				<font-awesome-icon :class=" isOpen == true ? 'arrowOpen' : ''" icon="fa-solid fa-chevron-down" />
			</div>
			<div class="content" :class="'content' + constentType + index">
				<div class="contentInner" :class="'contentInner' + constentType + index">
                    <div v-if="constentType == 'slide'" class="typeContent" >
                    <div class="dataContainer">
                        <p>Title: {{ showData.title }}</p>
                        <img :src="showData.image" alt="">
                    </div>
                    <div class="dataContainer">
                        <p>btnTile1: {{ showData.btn1Title }}</p>
                        <p>btnLink1: {{showData.btn1Link}}</p>
                        <p>btnTile2: {{ showData.btn2Title }}</p>
						<p>btnLink2: {{showData.btn2Link}}</p>
                    </div>
                    </div>
                    <div v-if="constentType == 'product'" class="typeContent" >
                        <div class="dataContainer">
                            <p>Title: {{ showData.title }}</p>
                            <p v-for="image in showData.image">{{image}}</p>
                        </div>
                        <div class="dataContainer">

                        </div>
                    </div>
				</div>
			</div>
		</div>
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
    showData:{
        default:{},
        type:Object
    },
    index:{
        default:0,
        type:Number
    },
    constentType:{
        default:"",
        type:String
    }
})
function openAccordion(){
		const accordion = document.querySelectorAll('.content' + props.constentType + props.index);
	for(let content of accordion){
		const accordionConten =	content.querySelector('.contentInner' + props.constentType + props.index).offsetHeight;
		if(isOpen.value == true){
			content.style.height = accordionConten + "px";
		}else {
			content.style.height = "0px";
		}
	}
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
			}
		}
	}
    .contentproduct {
        margin: 0;
    }
    .typeContent{
        display: grid;
        grid-template-columns: 1fr 1fr;
        .dataContainer{
			margin-left: 1rem;
            p{
                color:white;
                margin-bottom: 1rem;
            }
            img{
                width: 300px;
                height: auto;
                object-fit: contain;
            }
            a{
                color: white;
                margin-bottom: 1rem;
                display: block;
            }
        }
    }
</style>