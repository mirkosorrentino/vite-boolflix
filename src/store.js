import { reactive } from "vue";

export const store = reactive({
    selectedSearch: "",
    movies:[],
    searchKey: "564a7500f244b7fb2c0649f2a8a0940a",
    apiBase: "https://developers.themoviedb.org/3"
})