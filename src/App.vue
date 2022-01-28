<script>
  export default {
    data() {
      return {
        newUserName: this.$store.state.userInfo
      }
    }
  }
</script>

<template>
  <nav v-if="true">
    <ul class="d-flex flex-row justify-content-around">
      <li class="p-2">
        <RouterLink to="/">Search</RouterLink>
      </li>
      <li class="p-2">
        <RouterLink to="/global">Global weather</RouterLink>
      </li>
      <li class="p-2">
        <RouterLink
          :to="`/saved/${
            newUserName.length > 0 ? this.newUserName[0].userName : ''
          }`"
        >
          My favorites
        </RouterLink>
      </li>
      <li class="p-2">
        <RouterLink to="/signup">Sign up</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
