<template>
  <div class="index">
    <el-container>
     <el-header>
    <div class="logo">
      <img src="@/assets/img/logo-blue-long.png">
      <div class="text">健康险·数据管理系统</div>
    </div>

    <div class="upLogin">
      <el-popconfirm title="确定要退出登录吗？"  @confirm="logout">
      <el-button type="danger" slot="reference">退出登录</el-button> 
      </el-popconfirm> 
    </div>
  </el-header>
  <el-container>

    <el-aside :width="isCollapse ? '64px':'150px'">
      <el-tooltip  effect="dark" :content="isCollapse ? '展开':'折叠'" placement="right">
      <div class="fold" @click=clickFold>
        <i class="el-icon-d-arrow-left" v-show="!isCollapse"></i>
        <i class="el-icon-d-arrow-right" v-show="isCollapse"></i>
      </div>
      </el-tooltip> 
     <el-menu  background-color="#dde4ee"
        active-text-color="#85A5FF"
        text-color="rgba(0, 0, 0, 0.7)"
        :collapse="isCollapse"
        :collapse-transition="collspseFlash"
        >
      <el-menu-item index="1">
        <i class="el-icon-edit"></i>
        <span slot="title">报表上传</span>
      </el-menu-item>

         <el-menu-item index="2">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">数据浏览</span>
      </el-menu-item>

        <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>
        
     </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container></div>
</template>
<script>
import{ mapGetters } from 'vuex'
export default {
   name:'Index',
    data(){
            return {
            isCollapse:false,
            collspseFlash:false
            }
          },
   computed:{
     ...mapGetters([
       'token','user'
     ])
   },
   methods:{
     clickFold(){
        this.isCollapse=!this.isCollapse
     },
     async logout(){
       this.$store.dispatch('user/logout').then(()=> {
         this.$message.info('退出登录成功')
         setTimeout(()=>{
            this.$router.push({ path: this.redirect || '/' })
          
         },500)
       })
     }
   }
}
</script>
</script>

<style lang="less" scoped>
.index{
    height: 100%;
}

.el-header {
    background:#d3e4eb;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .logo{
      display: flex;
      align-items:center; 
      height: 100%;
     
      .text{
      font-size:18px;
      color:#657ddf;
      padding-left:20px;
      }
    }
}
.el-aside{
    background:#dde4ee;
    position: relative;
    .el-menu{
      border-right:none;
    }
    .fold{
      position:absolute;
      color: #17253f;
      right:0;
      top:calc(50%);
      font-size: 18px;

    }

}
.el-container{
    background:#F8F8F8;
    height: 100%;
}

</style>

