<template>
	<nav>
        <NavbarLinkCom v-for="page in pages" :link="page.link" :selected="page.selected" :title="page.title"></NavbarLinkCom>
	</nav>
</template>
<script setup>
const props = defineProps({
	pages:{
		default:[],
		type:Array
	}
})
</script>
<style lang="scss" scoped>
nav{
	margin-left: 1rem;
	margin-top: 1rem;
}
</style>