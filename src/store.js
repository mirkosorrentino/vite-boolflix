import { reactive } from "vue";

export const store = reactive({
    selectedSearch: "",
    moviesAndTv:[],
    searchKey: "564a7500f244b7fb2c0649f2a8a0940a",
    apiBase: "https://api.themoviedb.org/3",
    apiImages: "https://image.tmdb.org/t/p/w500/"
})