<template>
  <div class="nav">
    <p>Vue Management</p>
    <div class="nav-link">
      <button>
        <router-link to="/" class="btn-signup">Sign up</router-link>
      </button>
      <button>
        <router-link to="/login" class="btn-signin">Sign in</router-link>
      </button>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
