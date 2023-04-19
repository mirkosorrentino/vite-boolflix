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

  methods() {
    // handleSearch() {
      
    // }
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
