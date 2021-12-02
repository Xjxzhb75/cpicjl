<template>
  <div class="index">
    <el-container>
     <el-header>
    <div class="logo">
      <img src="@/assets/img/logo-blue-long.png">
      <div class="text">健康险·数据管理系统</div>
    </div>

    <div class="upLogin">
      <a>欢迎：</a> <span>{{user.name}}</span>
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
        router
        >
      <el-menu-item index="/exupdata">
        <i class="el-icon-edit"></i>
        <span slot="title">报表上传</span>
      </el-menu-item>

         <el-menu-item index="/databrows">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">数据浏览</span>
      </el-menu-item>

        <el-menu-item index="/usersetup">
        <i class="el-icon-setting"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
        
     </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
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
    .upLogin{
      span{
        font-size: 15px;
        color:rgb(3, 52, 92);
        padding-right: 40px;
      }
      a{
        font-size: 14px;
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

