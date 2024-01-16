<template>
	<div class="siteLayout mainbg">
        <header class="secoundBg">
        <NavbarCom :pages="pages"></NavbarCom>
        </header>
        <div class="defaultPage">
            <div v-if="checkModal == true" class="modalBg"></div>
            <slot></slot>
        </div>
	</div>
</template>
<script setup>
import { useStore } from "@/store/glStore"
const store = useStore()
const checkModal = computed(()=> store.modalOpen)
const route = useRoute()
const currentRoute = computed(()=>route.path)
const pages = ref([
    {
        link:"/",
        title:'Home',
        selected:true
    },
    {
        link:"/frontPage",
        title:'Front page',
        selected:false
    },
    {
        link:"/ProductsPage",
        title:'Product Page',
        selected:false
    }
])
function setCurrentRoute(){
    for(let page of pages.value){
        if(page.link == route.path){
            page.selected = true 
        }else {
            page.selected = false
        }
    }
}
setCurrentRoute()
watch(currentRoute, async(newData, oldData)=>{
    if(newData != oldData){
        setCurrentRoute()
    }
})
</script>
<style lang="scss" scoped>
.siteLayout{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    max-width: 100vw;
}
header{
grid-column: 1/2;
grid-row: 1/13;
}
.defaultPage{
    min-height:100vh ;
    width: 100%;
    grid-column: 3/12;
    grid-row: 2/12;
}
.modalBg{
    background-color: hsla(0,0%,10%,50%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: 2;
}
</style>