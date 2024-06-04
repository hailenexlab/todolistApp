<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
