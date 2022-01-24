<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'ConApp',
  mounted() {
      this.$store.dispatch('getUsers')
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
  }
  #app {
    font-family: 'Didact Gothic', Helvetica, Arial, sans-serif;
  }

</style>
