<template>
	<div class="DeleteModal">
        <h3>Are you sure you want to delete the slide?</h3>
		<div class="btnContainer">
			<button @click="$emit('modalDelete')" class="deleteBtn btn">Delete</button>
			<button @click="$emit('modalCancel')" class="cancelBtn btn">cancel</button>
		</div>
	</div>
</template>
<script setup>
const emits = defineEmits(["modalDelete", "modalCancel"])
</script>
<style lang="scss" scoped>
.DeleteModal{
	background-color: hsl(0, 0%, 30%);
	width: fit-content;
	height: fit-content;
	padding: 1rem;
	color: white;
	border-radius: 1rem;
	position: fixed;
	z-index: 999;
	top: 20%;
	left: 50%;
	width: 300px;
	margin-left: -150px;
	.btnContainer{
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin: 0 auto;
	}
	.btn{
		color: white;
		border: 1px solid transparent;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
	}
	.deleteBtn{
		background-color: hsl(0, 100%, 35%);
	
	}
	.cancelBtn{
		background-color: hsl(0, 0%, 25%);
	}

}

</style>