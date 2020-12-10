<template>
<div>
  <p>Le status</p>
  <p>{{ userAPI }}</p>
  <p>{{ status }}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Status',
  data() {
    return {
      userAPI: process.env.VUE_APP_USER_API,
      status: {},
    };
  },
  created() {
    (async () => {
      try {
        const { data } = await axios.get(this.userAPI);
        this.status = data;
      } catch (err_) {
        this.status = 'Error';
      }
    })();
  },
};
</script>
