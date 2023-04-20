<script>
import AppMain from './components/AppMain.vue';
import SearchBar from './components/SearchBar.vue';

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppMain,
    SearchBar,
  },

  data() {
    return {
      store
    }
  },
  
  methods: {
    handleSearch() {
      if(this.store.searchKey){
        this.getMovies();
      }
    },

    getMovies() {
      axios.get(`${this.store.apiBase}/search/movie`, {
        params: {
          api_key: this.store.searchKey,
          query: this.store.selectedSearch
        }
      }).then((resp) => {
          this.store.movies = resp.data.results;
      }).catch(error => {
        console.log("errore")
      }) 
    }
  }
}
</script>

<template>
  <SearchBar @search="handleSearch"/>
  <AppMain/>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
