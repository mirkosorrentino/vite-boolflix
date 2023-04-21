<script>
import { store } from "../store";

export default{
    name: "AppMain",
    data(){
        return{
          store,
          availableFlags: ['it', 'en']
        }
    },

    computed: {
      
    },

    methods: {
      getImgPath (imgPath) {
        return new URL(imgPath, import.meta.url).href;
      },

      voteOutOfFive() {
        return Math.ceil(this.movie.vote_average);
      }
    }
}
</script>

<template>
  <main>
    <ul>
      <li v-for="movie in store.moviesAndTv">
        <div><span class="ms_category">Titolo</span>: {{ movie.title || movie.name }}</div>
        <div><span class="ms_category">Titolo originale</span>: {{ movie.original_title || movie.original_name }} </div>
        <div class="ms_nationality">
          <span class="ms_category">Lingua originale</span>
          <span v-if="availableFlags.includes(movie.original_language)">: <img :src="getImgPath(`../assets/img/${movie.original_language}.png`)" class="ms_flag" alt="flag"></span>
          <span v-else>: {{ movie.original_language }}</span>
        </div>
        <div><span class="ms_category">Voto</span>: {{ voteOutOfFive }} </div>
        <div><span class="ms_category">Overview</span>: {{ movie.overview }}</div>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss";
@use "../styles/partials/variables.scss";

.ms_category {
  font-weight: 700;
}

.ms_flag {
  width: 5%;
}

</style>