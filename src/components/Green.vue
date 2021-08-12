<template>
  <div class="green">
    <h1>Green</h1>
    <div class="r"></div>
    <div class="y"></div>
    <div class="g"></div>
    <div class="ddd">{{this.time}}</div>
  </div>
</template>

<script>
export default {
  name: 'Green',
  props: {

  },
  data() {
    return {
      time: null,
      toggle: true
    }

  },

  mounted(){
    if (localStorage.timeG>0){
      this.time = Number(localStorage.timeG)
    } else{
      this.time = 15
      localStorage.timeG = this.time.toString()
    }
    setTimeout(() => {
      this.$router.push('/red')
    }, this.timeout1)
    setInterval(()=>{
      this.time = this.time-1
      if (localStorage.timeG>0) {
        localStorage.timeG = this.time.toString()
      } else {
        localStorage.timeG = '15'
        this.time = Number(localStorage.timeG)
      }
      localStorage.timeR = '10'
      localStorage.timeY = '3'
    }, 1000)
  },
  computed:{
    timeout1(){
      return Number(localStorage.timeG)*1000}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .green{
    margin: 0 auto;
  }
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
  opacity: 0.3;
  margin: 2px auto;
}
.g{
  opacity: 1;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  margin: 2px auto;
}
.active{
  opacity: 0.3;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  margin: 2px auto;
}
  .ddd{

    font-size: 50px;
    font-weight: bold;
    margin: 2px auto;
    margin-top: 10px;
  }

</style>
