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

  <router-view/>  

</template>

<style lang="scss">
@use './style/main.scss';



</style>