<template>
  <div class="yellow">
    <h1>Yellow</h1>
    <div class="r"></div>
    <div class="y"></div>
    <div class="g"></div>
    <div class="ddd">{{this.time}}</div>
  </div>
</template>

<script>
export default {
  name: 'Yellow',
  props: {

  },
  data() {
    return {
      time: null
    }

  },

  mounted(){
    if (localStorage.timeY){
      this.time = Number(localStorage.timeY)
    } else{
      this.time = 3
      localStorage.timeY = this.time.toString()
    }
    localStorage.timeG=15
    setTimeout(() => {
      this.$router.push('/green')
    }, this.timeout2)
    setInterval(()=>{
      this.time = this.time-1
      localStorage.timeY = this.time.toString()
      localStorage.timeG = '15'
      localStorage.timeR = '10'
    }, 1000)
  },
  computed:{
    timeout2(){
      return Number(localStorage.timeY)*1000}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .r{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    opacity: 0.3;
    margin: 2px auto;
  }
  .y{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50%;
    margin: 2px auto;
  }
  .g{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: green;
    border-radius: 50%;
    opacity: 0.3;
    margin: 2px auto;
  }
  .ddd{
    font-size: 50px;
    font-weight: bold;
    margin: 2px auto;
    margin-top: 10px;
  }
</style>
