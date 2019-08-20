<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item nav-link">
                <router-link :to="{name: 'home'}">Home</router-link>
              </li>
              <li class="nav-item nav-link">
                <router-link :to="{name: 'charts'}">Charts</router-link>
              </li>
            </ul>
          </div>
    </nav>
</template>

<script>

export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style>
  .navbar {
    margin-bottom: 20px;
  }
</style>
