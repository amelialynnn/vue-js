<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        searchedCity: null,
        city: null,
        weather: null,
        api_key: import.meta.env.VITE_API_KEY,
        addValue: 'Add to favorites',
        searchError: false
      }
    },
    methods: {
      weatherOnClick() {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.searchedCity}&units=metric&appid=${this.api_key}`
          )
          .then((response) => {
            this.weather = response.data
          })
          .catch(() => {
            this.searchError = true
            this.weather = null
          })

        this.city = this.searchedCity
        this.searchedCity = null
        this.addValue = 'Add to favorites'
        this.searchError = false
      },
      addOnClick() {
        if (this.$store.state.favorite.includes(this.city)) {
          this.addValue = 'Already added to favorites'
        } else {
          this.addValue = 'Added to favorites'
          this.$store.commit('saveFavorites', this.city)
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
  <h1 :class="'display-1'">Weather</h1>
  <input
    v-model="searchedCity"
    type="text"
    @keyup.enter="weatherOnClick"
    placeholder="Search city..."
  />
  <input
    type="button"
    value="Search"
    @click="weatherOnClick"
    :class="'btn btn-light'"
  />
  <div v-if="weather !== null">
    <h1>{{ weather.name }}, {{ weather.sys.country }}</h1>
    <p>{{ formatDescription }}</p>
    <p>{{ Math.round(weather.main.temp) }}°C</p>
    <input
      type="button"
      :value="addValue"
      @click="addOnClick"
      :class="'btn btn-light'"
    />
  </div>

  <p v-if="searchError === true" class="warning">
    This city does not exist... Try again!
  </p>
</template>

<style lang="scss" scoped>
  input[type='text'] {
    border: none;
    padding: 6px;
    margin: 6px;
  }

  input[type='button'] {
    margin: 6px;
  }
</style>
