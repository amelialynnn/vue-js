<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        searchedCity: null,
        city: null,
        weather: null,
        addValue: 'Add to favorites'
      }
    },
    methods: {
      weatherOnClick() {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.searchedCity}&units=metric&appid=bf3e73e780eccd2d55f7b0ddfc0e1559`
          )
          .then((response) => (this.weather = response.data))

        this.city = this.searchedCity
        this.searchedCity = null
        this.addValue = 'Add to favorites'
      },
      addOnClick() {
        this.$store.commit('saveFavorites', this.city)
        this.addValue = 'Added to favorites'
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
  <h1>Weather</h1>
  <input v-model="searchedCity" type="text" @keyup.enter="weatherOnClick" />
  <input type="button" value="Search" @click="weatherOnClick" />
  <div v-if="weather !== null">
    <h1>{{ weather.name }}, {{ weather.sys.country }}</h1>
    <p>{{ formatDescription }}</p>
    <p>{{ Math.round(weather.main.temp) }}°C</p>
    <input type="button" :value="addValue" @click="addOnClick()" />
  </div>
</template>

<!-- TODO
1. Error om stad inte finns
2. Inte kunna lägga till stad 2ggr
-->
