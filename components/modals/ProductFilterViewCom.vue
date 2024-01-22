<template>
	<div class="modal">
        <h3>Are you sure you want to delete the slide?</h3>
        <div class="iamgeViewContainer">
            <div class="imageData" v-for="(filter ,index) in filterData">
                <button @click="$emit('modalDeleteFilter', index)" class="deleteBtn btn">Delete</button>
                <div class="toolTip">
                    <p>{{ filter }}</p>
                    <p class="toolTipText">{{ filter }}</p>
                </div>
                
            </div>
        </div>
		<div class="btnContainer">
			<button @click="$emit('modalCancel')" class="cancelBtn btn">cancel</button>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
   filterData:{
        default:[],
        type:Array
    }
})
const emits = defineEmits(["modalDeleteFilter", "modalCancel"])
</script>
<style lang="scss" scoped>
    .modal{
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            width: fit-content;
        }
        .btnContainer{
            justify-content: center;
        }
    }
    .iamgeViewContainer{
    width: 100%;
    }
    .imageData{
        display: flex;
        align-items: baseline;
        justify-content: center;
        width:100%;
        gap: 1rem;
        .toolTip{
            width: 300px;
        p:first-child{
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        }
        
    }
</style>