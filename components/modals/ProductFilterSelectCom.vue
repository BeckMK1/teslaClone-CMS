<template>
<div class="modal">
        <h3>Select filters</h3>
        <VeeForm @submit="submitFilter" class="filterSelect">
            <label for="postnummer">Postnummer</label>
            <VeeField type="text" name="postnummer" v-model="zipCode" rules="postCode"></VeeField>
            <VeeErrorMessage class="error" name="postnummer"></VeeErrorMessage>
            <div class="selectCat">
                <label for="model">Model X</label>
                <VeeField v-model="model" name="model" type="radio" value="Model X"></VeeField>
                <label for="model">Model Y</label>
                <VeeField v-model="model" name="model" type="radio" value="Model Y"></VeeField>
                <label for="model">Model S</label>
                <VeeField v-model="model" name="model" type="radio" value="Model S"></VeeField>
            </div>
            <div class="selectCat">
                <label for="checkBoxData1">Performance firehjulstræk</label>
                <VeeField v-model="checkboxes" name="checkBoxData1" type="checkbox" value="Performance firehjulstræk"></VeeField>
                <label for="checkBoxData2">Long Range firehjulstræk</label>
                <VeeField v-model="checkboxes" name="checkBoxData2" type="checkbox" value="Long Range firehjulstræk"></VeeField>
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
const zipCode = ref("")
const model = ref("")
const checkboxes = ref([])
const isAddedFilter = ref(false)
function submitFilter(){
    filter.value.push(...checkboxes.value)
    filter.value.push(model.value)
    sendFilter()
}
function sendFilter(){
    emits('addSelectedFilter', filter.value, zipCode.value)
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
.error{
    color: red;
    display: block;
    margin-bottom: 1rem;
}
</style>