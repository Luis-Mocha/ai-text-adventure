<script>

export default {
  name: 'Playground',
  data() {
    return {

    }
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      console.log(`ehi ${import.meta.env.VITE_API_KEY}`);
    },
  }
}

</script>

<template>

  <h1 class="text-center">Playground</h1>

</template>

<style lang="scss" scoped>
@use '../style/main.scss';

h1 {
  color: green;
}

</style>