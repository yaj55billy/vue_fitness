<template>
  <div id="app">
    <toasts></toasts>
    <router-view></router-view>
  </div>
</template>

<script>

import toasts from '@/components/Toasts.vue';

export default {
  components: {
    toasts,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
@import './assets/main';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
