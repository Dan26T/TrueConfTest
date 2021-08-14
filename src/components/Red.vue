<template>
  <div class="red">
    <h1>Red</h1>
    <div class="tl">
      <div :class="!this.toggle ? 'r' : 'r active'"></div>
      <hr/>
      <div class="y"></div>
      <hr/>
      <div class="g"></div>
      <hr/>
      <div class="ddd">{{this.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Red',
  props: {

  },
  data() {
    return {
      time: null,
      toggle: false
    }

  },
  mounted(){
    this.checkLocalStorage()
    this.checkDirection()
    this.timeCountR()
    this.less3Sek()
    this.timeOutR(this.timeoutR)
  },
  computed:{
    timeoutR(){
      return this.time*1000
    }
  },
  methods:{
    checkLocalStorage(){
      if (localStorage.timeR){
        this.time = Number(localStorage.timeR)
      } else{
        this.time = 10
        localStorage.timeR = this.time.toString()
      }
    },
    checkDirection(){
      if (!localStorage.direction){
        localStorage.direction = 'down'
      }
    },
    timeOutR(time) {
      setTimeout(() => {
        this.$router.push('/yellow')
        localStorage.timeR = '10'
        localStorage.direction = 'down'
      }, time)
    },
    timeCountR() {
      let start = setInterval(()=>{
        this.time = this.time-1
        this.saveTimerR()
        if (this.time<0){
          clearInterval(start)
          this.time = 10
          localStorage.timeR = this.time.toString()
        }
      }, 1000)
    },
    saveTimerR(){
      if (localStorage.mode == 'yes'){
        localStorage.timeR = this.time.toString()
        localStorage.timeG = '15'
        localStorage.timeY = '3'
      } else {
        localStorage.timeR = this.time.toString()
      }
    },
    less3Sek() {
      let less = setInterval(() => {
        if (this.time<4 ) {
          this.toggle = !this.toggle
        }
        if (this.time == 0) {
          clearInterval(less)
        }
      }, 500)
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tl{
    margin: 0 auto;
    background: silver;
    height: 420px;
    padding: 10px 0px 10px 0px;
    width: 120px;
  }
  .r{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    margin: 5px auto;
  }
  .active {
    opacity: 0.3;
  }
  .y{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50%;
    opacity: 0.3;
    margin: 5px auto;
  }
  .g{
    text-align: center;
    width: 100px;
    height: 100px;
    background-color: green;
    border-radius: 50%;
    opacity: 0.3;
    margin: 5px auto;
  }
  .ddd{
    font-size: 50px;
    font-weight: bold;
    margin: 2px auto;
    margin-top: 10px;
  }
</style>
