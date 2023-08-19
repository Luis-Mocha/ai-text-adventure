<script>
import HeaderComp from './components/Headercomp.vue';
import Playground from './pages/Playground.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    Playground
  }
}

</script>

<template>

  <HeaderComp/>

  <Playground/>

</template>

<style lang="scss">
@use './style/main.scss';

</style>