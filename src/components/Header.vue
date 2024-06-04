<template>
  <div class="nav">
    <p>Vue Management</p>
    <div class="nav-link">
      <button>
        <router-link to="/login" class="btn-signup">Sign in</router-link>
      </button>
      <button>
        <router-link to="/register" class="btn-signin">Sign up</router-link>
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
