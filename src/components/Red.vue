<template>
  <div class="red">
    <h1>Red</h1>
    <div class="r"></div>
    <div class="y"></div>
    <div class="g"></div>
    <div class="ddd">{{this.time}}</div>
  </div>
</template>

<script>
export default {
  name: 'Red',
  props: {

  },
  data() {
    return {
      time: null
    }

  },
  mounted(){
    if (localStorage.timeR && localStorage.timeR>0){
      this.time = Number(localStorage.timeR)
    } else{
      this.time = 10
      localStorage.timeR = this.time.toString()
    }
    setTimeout(() => {
      this.$router.push('/yellow')
    }, this.timeout3)
    setInterval(()=>{
      this.time = this.time-1
      localStorage.timeR = this.time.toString()
      localStorage.timeY = '3'
      localStorage.timeG = '15'
    }, 1000)
  },
  computed:{
    timeout3(){
      return Number(localStorage.timeR)*1000}
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
    margin: 2px auto;
  }
  .y{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50%;
    opacity: 0.3;
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
