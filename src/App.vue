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
        this.getTvSeries();
      }
    },

    getMovies() {
      axios.get(`${this.store.apiBase}/search/movie`, {
        params: {
          api_key: this.store.searchKey,
          query: this.store.selectedSearch
        }
      }).then((resp) => {
          this.store.moviesAndTv = resp.data.results;
          console.log (this.store.moviesAndTv)
      }).catch(error => {
        console.log("errore Film")
      }) 
    },

    getTvSeries() {
      axios.get(`${this.store.apiBase}/search/tv`, {
        params: {
          api_key: this.store.searchKey,
          query: this.store.selectedSearch
        }
      }).then((resp) => {
          this.store.moviesAndTv = resp.data.results;
          console.log (this.store.moviesAndTv)
      }).catch(error => {
        console.log("errore Serie TV")
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
