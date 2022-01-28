<script>
  import SignUp from '../components/SignUp.vue'

  export default {
    components: {
      SignUp
    },
    data() {
      return { userName: null }
    },
    methods: {
      onNewUser(submittedName) {
        this.userName = submittedName
      }
    }
  }
</script>

<template>
  <SignUp v-if="userName === null" @new-user="onNewUser" />
  <div v-else>
    <p>Thanks for signing up {{ userName }}!</p>
  </div>
</template>
