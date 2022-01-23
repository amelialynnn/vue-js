<template>
  <nav v-if="true">
    <ul>
      <li>
        <RouterLink to="/">Search</RouterLink>
      </li>
      <li>
        <RouterLink to="/saved">My favorites</RouterLink>
      </li>
      <li>
        <RouterLink to="/global">Global weather</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>
  nav li {
    list-style-type: none;
  }
</style>
