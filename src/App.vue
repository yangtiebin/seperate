<template>
  <div id="app" v-wechat-title='$route.meta.title'>
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style>

body {
  margin: 0 !important;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 !important;
}

el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
