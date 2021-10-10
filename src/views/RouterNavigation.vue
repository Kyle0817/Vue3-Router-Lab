<template>
  <button type="button" @click="getRoute">getRoute</button>

  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄，可進行導頁(1.帶入字串url方式 2.物件帶入對應的name)
    push() {
      // this.$router.push('/newPage/namedView/cToa');
      this.$router.push({
        name: 'About',
      });
    },
    // 沒有歷史紀錄
    replace() {
      this.$router.replace({
        name: 'About',
      });
    },
    // 操作歷史紀錄
    go() {
      this.$router.go(-1);
    },
    getRoute() {
      // 取得路由的屬性，提供當前路由相關資訊
      console.log('route:', this.$route);
      // 呼叫路由的方法，
      console.log('router:', this.$router);
    },
    addRoute() {
      // 臨時新增路由
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./About.vue'),
      });
    },
  },
};
</script>
