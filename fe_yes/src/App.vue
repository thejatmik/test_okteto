<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <List :list="listA" />
    <Status />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import List from './components/List.vue';
import Status from './components/Status.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    List,
    Status,
  },
  data() {
    return {
      listA: [1, 2, 3, 3, 4, 4],
    };
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
