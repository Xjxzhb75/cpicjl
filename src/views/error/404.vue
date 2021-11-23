<template>
  <div class="error404">
        <div class="inner">
          <p>
         UH OH! 页面丢失
        <span>
          您所寻找的页面不存在， {{ times }} 秒后，将返回首页!
        </span>
          </p>
         </div>
        <div class="out">
          <div class="img404" >
            <img src="@/assets/img/404.png">
          </div>
        
        </div>
  </div>

</template>

<script>
export default {
  name: "404",
  data() {
    return {
      times: 10
    }
  },
  created() {
    this.goHome();
  },
  methods: {
    goHome: function () {
      this.timer = setInterval(() => {
        this.times--
        if (this.times === 0) {
          clearInterval(this.timer)
          this.$router.push({path: '/'});
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
   .error404{
     background: #f8f8f8f8;
     height:100%;
     position: relative;
     .out{
       width:338px;
       height: 345px;
       background: #fff;
       border-radius: 10px;
       box-shadow: 0 0 10px rgb(0, 0, 0,0.3);
       position: absolute;
       left: 0;
       right:0;
       top: 0;
       bottom: 0;
       margin: auto;
     }
     .inner{
       padding:150px;
       p{
         font-size: 40px;
         color: red;
         text-align: center;
        span{
          padding: 15px;
          font-size: 15px;
          display: block;
        }
       }

      }
     }
    
    

     
     
   
</style>