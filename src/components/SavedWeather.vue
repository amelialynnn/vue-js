<script>
  import FetchWeather from './FetchWeather.vue'

  export default {
    components: {
      FetchWeather
    },
    data() {
      return {
        favorites: this.$store.state.favorite
      }
    }
  }
</script>

<template>
  <h1 :class="'display-5'" v-if="$route.params.userName === ''">
    Hi! Here are your saved cities
  </h1>
  <h1 :class="'display-5'" v-else>
    Hi {{ this.$route.params.userName }}! Here are your saved cities
  </h1>
  <FetchWeather
    v-for="favorite in favorites"
    :city-name="favorite"
    :key="favorite"
  />
  <p v-if="favorites.length <= 0">You haven't saved any cities yet</p>
</template>
