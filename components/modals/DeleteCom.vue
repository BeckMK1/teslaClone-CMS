<template>
	<div class="modal">
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
div{}

</style>