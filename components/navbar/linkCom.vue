<template>
	<div>
        <NuxtLink :class="selected == true ? 'navSelected' : ''" class="navLink" :to="link">{{title}}</NuxtLink>
	</div>
</template>
<script setup>
const props = defineProps({
    link:{
        default: "/",
        type:String
    },
    title:{
        default:"",
        type:String
    },
    selected:{
        default:false,
        type:Boolean
    }
})
</script>
<style lang="scss" scoped>
    .navLink{
        transform: 500ms;
        padding: 0.5rem 0;
        padding-left: 1rem;
        margin-bottom:0.5rem;
        cursor: pointer;
        width: 100%;
        display: block;
        &:hover{
            background-color: hsla(0, 0%, 5%, 50%);
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            transition: 500ms;
        }
    }
    .navSelected{
        background-color: hsl(0, 0%, 5%);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        transition: 500ms;
        &:hover{
            background-color: hsl(0, 0%, 5%);
        }
    }
    a{
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
    }
</style>