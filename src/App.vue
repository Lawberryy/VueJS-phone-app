<template>
  <div id="telephone">
    <main class="main">
      <router-view/>
    </main>
    <nav>
      <router-link to="/">Journal</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/clavier">Clavier</router-link>
    </nav>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  justify-content: center;
}

#telephone {
  background-color: rgb(16, 16, 16);
  min-height: 100vh;
  max-height: 100vh;
  width: 25rem; /* 25 x 16px = 400px */
  color: rgb(213, 213, 213);
  position: relative;
}

.main {
  padding: 10px;
  height: 91vh;
  overflow-y: auto;
  padding-top: 15px;
}

nav {
  position: fixed;
  bottom: 0;
  width: 25rem;
  height: 9vh;
  border-top: 2px solid rgb(213, 213, 213);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: rgb(213, 213, 213);
}

nav a.router-link-exact-active {
  /* color: rgb(238, 67, 135); */
  color: rgb(0, 101, 253);
}
</style>
