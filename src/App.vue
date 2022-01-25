<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/modules/users'

export default {
  name: 'ConApp',
  methods: {
    ...mapActions({
      getUsers: actionTypes.getUsers
    })
  },
  mounted() {
      this.getUsers()
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