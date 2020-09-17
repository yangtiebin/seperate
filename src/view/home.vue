<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" class="el-separate" mode="horizontal" @select="handleSelect"
                 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/">
            首页
          </el-menu-item>
          <el-submenu >
            <template slot="title">分享</template>
            <el-menu-item index="/moments">朋友圈</el-menu-item>
            <el-menu-item index="/video">小视频</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>待开发</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeIndex: "/"
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key)
      switch (key) {
        case "/":
          this.$router.push({path: '/'})
          break;
        case "/moments":
          this.$router.push({path: '/moments'})
          break;
        case "/video":
          this.$router.push({path: '/video'})
          break;
        case "/about":
          this.$router.push({path: '/about'})
          break;

      }
    }
  }
}
</script>

<style scoped>

</style>