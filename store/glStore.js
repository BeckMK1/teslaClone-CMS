import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  state: () => {
    return {
        slides:[
            {
                contentType:"slide",
                slideId:1,
                title:"SlideTitle",
                image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                btn1Title:"btnTitle1",
                btn1Link:"https://pinia.vuejs.org/core-concepts/",
                btn2Title:"btnTitle2",
                btn2Link:"https://pinia.vuejs.org/core-concepts/"
            },
            {
              contentType:"slide",
              slideId:1,
              title:"SlideTitle",
              image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              btn1Title:"btnTitle1",
              btn1Link:"https://pinia.vuejs.org/core-concepts/",
              btn2Title:"btnTitle2",
              btn2Link:"https://pinia.vuejs.org/core-concepts/"
          },
        ],
        products:[],
        modalOpen:false,
        isSaveBtn:false
    }
  },
  actions:{
    setSlides(data){
        this.slides.push(data)
    },
    deleteSlide(data){
        this.slides.splice(data, 1)
    },
    setModalOpen(data){
      this.modalOpen = data
    },
    setProducts(data){
      this.products.push(data)
    },
    deleteProduct(data){
      this.products.splice(data, 1)
    },
    setSaveBtn(data){
      this.isSaveBtn = data
    }
  }
})