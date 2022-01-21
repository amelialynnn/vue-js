<script>
  import axios from 'axios'

  export default {
    data() {
      return { city: null, weather: null }
    },
    methods: {
      weatherOnClick() {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=sv&appid=7849c41a0603c0aa064b75552cf9ee10`
          )
          .then((response) => (this.weather = response.data))
      }
    }
  }
</script>

<template>
  <input v-model="city" type="text" />
  <input @click="weatherOnClick" type="button" value="Submit" />
  <div v-if="weather !== null">
    <h1>{{ weather.name }}, {{ weather.sys.country }}</h1>
    <p>{{ weather.weather[0].description }}</p>
    <p>{{ Math.round(weather.main.temp) }}°C</p>
  </div>
  <p v-else>Sök väder</p>
</template>
