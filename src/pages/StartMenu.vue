<script>

    export default {
        name: 'StartMenu',
        data() {
            return {

            }
        },
        created() {
        },
        methods: {
            
        }
    }

</script>

<template>

    <h1 class="text-center">
        Welcome adventurer
    </h1>

    <div class="container">

        <p>Scegli la tua storia</p>

        <div class="menu-options d-flex justify-content-evenly my-3">

            <router-link :to="{ name: 'playground', params: { genre: 'fantasy' } }" class="menu-option">
                fantasy
            </router-link>

            <router-link :to="{ name: 'playground', params: { genre: 'horror' } }" class="menu-option">
                horror
            </router-link>

            <router-link :to="{ name: 'playground', params: { genre: 'super' } }" class="menu-option">
                super
            </router-link>

        </div>
    </div>

    
  
  </template>
  
<style lang="scss" scoped>
@use '../style/main.scss';

    h1 {
        color: green;
    }

    .menu-option {
        border: 2px solid white;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
            &:hover {
                background-color: darkcyan ;
            }
    }

</style>