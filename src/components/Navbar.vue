<template>
  <div class="navbar">
    <nav class="nav-extended cyan darken-4">
      <div class="nav-content">
        <router-link to="/">
          <span class="nav-title">Moon Light</span>
        </router-link>
        <router-link class="btn-large teal darken-4" :to="{ name: 'Register'}">
          <span>Cadastre-se</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {

      }
    }
  }
</script>

<style>
  .nav-content {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-content .nav-title {
    vertical-align: middle;
  }
</style>