import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  state: () => {
    return {
        slides:[
        ],
        products:[],
        tepmSlides:[],
        modalOpen:false,
        isSaveBtn:false,
        productsGot:false
    }
  },
  actions:{
    setSlides(data){
        this.slides = data
    },
    setAddSlides(data){
      this.tepmSlides.push(data)
    },
    resetAddSlides(){
      this.tepmSlides = []
    },
    deleteSlide(data){
        this.slides.splice(data, 1)
    },
    setModalOpen(data){
      this.modalOpen = data
    },
    setProducts(data){
      this.products = data 
    },
    deleteProduct(data){
      this.products.splice(data, 1)
    },
    setSaveBtn(data){
      this.isSaveBtn = data
    },
    setProductGot(data){
      this.productsGot = data
    }
  }
})