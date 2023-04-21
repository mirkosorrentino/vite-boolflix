<script>
import { store } from "../store";

export default{
    name: "AppMain",
    data(){
        return{
          store
        }
    }
}
</script>

<template>
  <main>
    <ul>
      <li v-for="movie in store.movies">
        <h3> {{ movie.title }}</h3>
        <div> {{ movie.original_title }} </div>
        <div> {{ movie.original_language }} </div>
        <div> {{ movie.vote_average }} </div>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins.scss";
@use "../styles/partials/variables.scss";

</style>