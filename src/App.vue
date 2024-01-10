<template>
  <header-item></header-item>
  <router-view></router-view>
  <footer-item></footer-item>
</template>

<script>
import HeaderItem from '@/components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';

export default {
  components: {
    HeaderItem,
    FooterItem
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: rgb(61, 61, 117);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
