<template>
  <div>route</div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    // console.log(this.$route.params);
    const userId = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${userId}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
