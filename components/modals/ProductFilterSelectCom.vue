<template>
<div class="modal">
        <h3>Select filters</h3>
        <VeeForm @submit="submitFilter" class="filterSelect">
            <label for="postnummer">Postnummer</label>
            <VeeField type="text" name="Postnummer"></VeeField>
            <div class="selectCat">
                <label for="model">Model X</label>
                <VeeField name="model" type="radio" value="Model X"></VeeField>
                <label for="model">Model Y</label>
                <VeeField name="model" type="radio" value="Model Y"></VeeField>
                <label for="model">Model S</label>
                <VeeField name="model" type="radio" value="Model S"></VeeField>
            </div>
            <div class="selectCat">
                <label for="checkBoxData1">checkBoxData</label>
                <VeeField name="checkBoxData1" type="checkbox" value="checkBoxData1"></VeeField>
                <label for="checkBoxData2">checkBoxData</label>
                <VeeField name="checkBoxData2" type="checkbox" value="checkBoxData2"></VeeField>
                <label for="checkBoxData3">checkBoxData</label>
                <VeeField name="checkBoxData3" type="checkbox" value="checkBoxData3"></VeeField>
                <label for="checkBoxData4">checkBoxData</label>
                <VeeField name="checkBoxData4" type="checkbox" value="checkBoxData4"></VeeField>
                <label for="checkBoxData5">checkBoxData</label>
                <VeeField name="checkBoxData5" type="checkbox" value="checkBoxData5"></VeeField>
            </div>
            <div class="btnContainer">
                <button class="addBtn">Add Filter</button>
                <div class="addBtn" @click="$emit('cancelFilterSelect')">Close</div>    
            </div>                                   
        </VeeForm>
        <p class="filterAddedText" :class="isAddedFilter == true ? 'filterAddedTextShow': ''">Filter added</p>
</div>
</template>
<script setup>
const emits = defineEmits(["cancelFilterSelect", "addSelectedFilter"])
const filter = ref([])
const isAddedFilter = ref(false)
function submitFilter(value){
    filter.value = Object.values(value)
    filter.value = filter.value.filter((el)=>{
        return el != null
    })
    sendFilter()
}
function sendFilter(){
    emits('addSelectedFilter', filter.value)
    isAddedFilter.value = true
    setTimeout(() => {
        isAddedFilter.value = false
    }, 1000);
}
</script>
<style lang="scss" scoped>
h3{
    margin-bottom: 1rem;
}
label{
    display: block;
    margin-bottom: 0.25rem;
}
input{
        background-color: hsl(0,0%, 15%);
        border-radius: 0.5rem;
        padding: 0.5rem;
        color: white;
        transition: 250ms;
        outline: none;
        border: 2px solid transparent;
        margin-right: 1rem;
        &:focus{
            border-color: white;
            transition: 250ms;
        }
    }
   input{
        margin-bottom: 1rem;
    }
.selectCat{
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%);
    margin-bottom: 1rem;
    input{
        margin-bottom: 0rem;
    }
    label{
        margin-right: 0.5rem;
    }
}
.addBtn{
background-color: hsl(0, 0%, 15%);
border: 1px solid transparent;
color: white;
font-size: 1.1rem;
padding: 0.5rem;
border-radius: 0.5rem;
transition: 250ms;
&:hover{
    border-color: white;
    transition: 250ms;
}
}
.btnContainer{
    width: 100%;
    ga
    .addBtn{
        width: 50%;
        height: fit-content;
        white-space: nowrap;
    }
}
.filterAddedText{
    color: hsl(130, 100%, 40%);
    transition: 250ms;
    opacity: 0;
}
.filterAddedTextShow{
    transition: 250ms;
    opacity: 100%;
}
</style>