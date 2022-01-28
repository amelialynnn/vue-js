<script>
  import axios from 'axios'

  export default {
    created() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=13b2ed02beb4ced6bf991af523fe664a`
        )
        .then((response) => (this.weather = response.data))
    },
    data() {
      return { weather: null, city: this.cityName }
    },
    props: {
      cityName: {
        type: String,
        required: true,
        default() {
          'Loading'
        }
      }
    },
    computed: {
      formatDescription() {
        return (
          this.weather.weather[0].description.charAt(0).toUpperCase() +
          this.weather.weather[0].description.slice(1)
        )
      }
    }
  }
</script>

<template>
  <div v-if="weather !== null">
    <h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
    <p>{{ formatDescription }}</p>
    <p>{{ Math.round(weather.main.temp) }}°C</p>
  </div>

  <p v-else>Error</p>
</template>
