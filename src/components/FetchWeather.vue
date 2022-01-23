<script>
  import axios from 'axios'

  export default {
    created() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=bf3e73e780eccd2d55f7b0ddfc0e1559`
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
          'Error'
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
  <p v-else>{{ 'Error' }}</p>
</template>
