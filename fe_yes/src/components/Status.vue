<template>
<div>
  <p>Le status</p>
  <p>{{ userAPI }}</p>
</div>
</template>

<script>
export default {
  name: 'Status',
  data() {
    return {
      userAPI: process.env.VUE_APP_USER_API,
    };
  },
};
</script>
