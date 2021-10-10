<template>
  <div>routeByProps</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  created() {
    // console.log(this.$route.params);
    // console.log('dynamicRouterByProps:', this.id);
    const userId = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${userId}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
