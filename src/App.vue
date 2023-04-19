<script>
import AppMain from './components/AppMain.vue';

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppMain
  },

  data() {
    return {
      store
    }
  },

  methods() {

  }
}
</script>

<template>
  <AppMain/>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
