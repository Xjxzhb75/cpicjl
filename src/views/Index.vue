<template>
  <div class="nihao">
      来了，老弟！
  </div>
</template>

<script>
import{ mapGetters } from 'vuex'
export default {
   name:'Index',
   computed:{
     ...mapGetters([
       'token'
     ])
   }
}
</script>

<style>

</style>