<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array,
  },
};
</script>
