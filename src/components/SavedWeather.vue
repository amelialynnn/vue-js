<script>
  import FetchWeather from './FetchWeather.vue'

  export default {
    components: {
      FetchWeather
    },
    data() {
      return { favorites: this.$store.state.favorite }
    }
  }
</script>

<template>
  <h1>Hi (Username) here are your saved cities</h1>
  <FetchWeather
    v-for="favorite in favorites"
    :city-name="favorite"
    :key="favorite"
  />
</template>
