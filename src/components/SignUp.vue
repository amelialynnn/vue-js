<script>
  export default {
    data() {
      return {
        submittedName: null,
        submittedEmail: null,
        submittedPassword: null,
        registeredUsers: ['Lisa', 'Sven', 'Lena', 'Matteus', 'Svea'],
        userExists: false
      }
    },
    methods: {
      onAddUser() {
        this.$emit('new-user', this.submittedName)
        this.$store.commit('addUser', {
          userName: this.submittedName,
          userEmail: this.submittedEmail,
          userPassword: this.submittedPassword
        })
      }
    },
    emits: ['new-user'],
    watch: {
      submittedName() {
        this.userExists = this.registeredUsers.includes(this.submittedName)
          ? true
          : false
      }
    }
  }
</script>

<template>
  <form class="container" v-if="$store.state.userInfo.length === 0">
    <div class="form-group">
      <h1>Sign up</h1>
      <label for="userName">Username</label>
      <input
        type="username"
        class="form-control"
        id="userName"
        placeholder="Enter username"
        v-model="submittedName"
      />
      <p v-if="userExists === true" class="warning">Username already exsists</p>
    </div>
    <div class="form-group">
      <label for="InputEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        id="InputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="submittedEmail"
      />
    </div>
    <div class="form-group">
      <label for="ImputPassword">Password</label>
      <input
        type="password"
        class="form-control"
        id="ImputPassword"
        placeholder="Password"
        v-model="submittedPassword"
      />
    </div>
    <button type="submit" class="btn btn-light" @click="onAddUser">
      Submit
    </button>
  </form>

  <div v-if="$store.state.userInfo.length > 0">
    <h1>Your account information</h1>
    <p>Username: {{ this.$store.state.userInfo[0].userName }}</p>
    <p>
      Email:
      {{ this.$store.state.userInfo[0].userEmail }}
    </p>
    <p>
      Password:
      {{ this.$store.state.userInfo[0].userPassword }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
  label {
    color: white;
  }

  input {
    margin: 15px;
  }
</style>
