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
        props: {},
        data() {
            return {
                time: null
            }

        },

        mounted() {
            this.checkLocalStorage()
            this.timeCountY()
            this.timeOutR(this.timeoutY)
        },
        computed: {
            timeoutY() {
                return this.time * 1000
            },
            path() {
                if (localStorage.direction == 'down') {
                    return '/green'
                } else if (localStorage.direction == 'up') {
                    return '/red'
                }
            }
        },
        methods: {
            checkLocalStorage() {
                if (localStorage.timeY) {
                    this.time = Number(localStorage.timeY)
                } else {
                    this.time = 3
                    localStorage.timeY = this.time.toString()
                }
            },
            timeOutR(time) {
                setTimeout(() => {
                    this.$router.push(this.path)
                    localStorage.timeY = '3'
                }, time)
            },
            timeCountY() {
                let start = setInterval(() => {
                    this.time = this.time - 1
                    this.saveTimerY()
                    if (this.time < 0) {
                        clearInterval(start)
                        this.time = 3
                        localStorage.timeY = this.time.toString()
                    }
                }, 1000)
            },
            saveTimerY(){
                if (localStorage.mode == 'yes'){
                    localStorage.timeY = this.time.toString()
                    localStorage.timeR = '10'
                    localStorage.timeG = '15'
                } else {
                    localStorage.timeY = this.time.toString()
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .r {
        text-align: center;
        width: 100px;
        height: 100px;
        background-color: red;
        border-radius: 50%;
        opacity: 0.3;
        margin: 2px auto;
    }

    .y {
        text-align: center;
        width: 100px;
        height: 100px;
        background-color: yellow;
        border-radius: 50%;
        margin: 2px auto;
    }

    .g {
        text-align: center;
        width: 100px;
        height: 100px;
        background-color: green;
        border-radius: 50%;
        opacity: 0.3;
        margin: 2px auto;
    }

    .ddd {
        font-size: 50px;
        font-weight: bold;
        margin: 2px auto;
        margin-top: 10px;
    }
</style>
