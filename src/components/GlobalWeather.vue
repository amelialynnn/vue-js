<script>
  import FetchWeather from './FetchWeather.vue'

  export default {
    components: {
      FetchWeather
    },
    data() {
      return {
        citiesArray: [
          'Stockholm',
          'Singapore',
          'New York',
          'Sydney',
          'Buenos Aires',
          'Denver',
          'Rom',
          'Cairo',
          'Tokyo',
          'Toronto'
        ]
      }
    }
  }
</script>

<template>
  <h1 :class="'display-1'">Global Weather</h1>
  <FetchWeather v-for="city in citiesArray" :city-name="city" :key="city" />
</template>
