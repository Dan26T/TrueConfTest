<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.checkReturnTimerMode()
    },
    data() {
      return {
        mode: 'yes' //reset the current timer when switching to another page
      }
    },
    methods: {
      checkReturnTimerMode() {
        localStorage.mode=this.mode
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
