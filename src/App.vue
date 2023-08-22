<script>
import {RouterView} from 'vue-router'
import HeaderComp from './components/Headercomp.vue';
// import StartMenu from './pages/StartMenu.vue';
// import Playground from './pages/Playground.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
}
}

</script>

<template>

  <HeaderComp/>

  <div class="content">

    <router-view/>

  </div>
  

</template>

<style lang="scss">
@use './style/main.scss';

.content {
  background-color: black;
  color: white;
}

</style>