<template>
  <div id="userLayout">
    <div class="login_panle">
      <div class="login_panle_left">
        <span>太保健康险数据维护系统</span>
        <img src="@/assets/img/no-data.svg" />
      </div>
      <div class="container11">
        <div class="login_panle_form">
          <img class="lg30" src="@/assets/img/logo30.jpg" />

          <el-form
            :model="loginForm"
            v-loading="loading"
            ref="loginForm"
            label-width="100px"
            :rules="loginRules"
            status-icon
          >
            <el-form-item label="用户名 :" prop="name">
              <el-input
                v-model="loginForm.name"
                clearable
                placeholder="请输入用户名"
                ref="inputuser"
              >
              </el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="loginForm.pass"
                show-password
                clearable
                placeholder="请输入密码"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <!--@click="onLogin('loginForm')"-->
              <el-button type="primary" @click="onlgin('loginForm')"
                >登录</el-button
              >
              <el-button type="primary"  @click="onReset">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="login_panle_foot">
        <span>版权所有©中国太平洋财产保险股份有限公司</span>
        <span>吉林省分公司</span>
        <p>
          CopyRight©China Pacific Property Insurance Co., Ltd.. All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Home",
    data() {
      return {
        loading: false,
        loginForm: {
          name: "",
          pass: "",
        },
        loginRules: {
          name: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 5, max: 15, message: "用户名在5-15位之间", trigger: "blur" },
          ],
          pass: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 5, max: 15, message: "密码在5-15位之间", trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      onlgin(formName) {
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            this.loading = true;
            
            this.$store
              //dispatch的Store里index.js配置的user路径下的login
              .dispatch("user/login", this.loginForm)
              .then(() => {
                setTimeout(()=>{
                 this.loading = false;
                 this.$router.push({ path: this.redirect || "/index" });
                 },0.1*1000);
              })
              .catch(() => {
                this.loading = false;
              });
          } else {
            return faslse;
          }
        });
      },
      onReset() {
        this.$refs["loginForm"].resetFields();
        this.$refs["inputuser"].focus();
      },
    },
  };
</script>
<style lang="less" scoped>
#userLayout {
  //background: #0D3F67;
  margin: 0;
  padding: 0;
  background-image: url("../assets/img/cpic-back.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  .login_panle {
    position: absolute;
    top: 3vh;
    left: 2vw;
    width: 90vw;
    height: 94vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    //border:1px solid #FFFFFF;
    .container11 {
      box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.7);
      width: 480px;
      height: 370px;
      background-color: #ffffff;
      backdrop-filter: blur(5px);
      border-radius: 10px;
      margin: 90px auto;
      .login_panle_form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 10px 80px 0px;
        .lg30 {
          padding-bottom: 20px;
        }
      }
    }
    .login_panle_left {
      width: 697px;
      height: 547px;
      //float: right !important;
      text-align: center;
      color: #f0f0f0;
      font-size: 45px;

      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-evenly;
      img {
        height: 60%;
        vertical-align: text-bottom;
      }
    }
    .login_panle_foot {
      position: absolute;
      bottom: 15px;
      text-align: center;
      font-size: 14px;
      color: #f0f0f0;
    }
  }
}
</style>