<script>
import { store } from '../store'

export default {
    name: "SearchBar",
    emits: ['search'],

    data() {
        return{
            store
        }
    },

    methods(){

    }
}
</script>

<template>
    <input type="text" v-model.trim="store.selectedSearch" @keyup.enter="$emit('search')">
    <button @click="$emit('search')">Search</button>
</template>

<style></style>