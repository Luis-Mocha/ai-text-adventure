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
            <div class="menu-option" data-genre="fantasy">
                fantasy
            </div>
            <div class="menu-option" data-genre="horror">
                horror
            </div>
            <div class="menu-option" data-genre="super">
                super
            </div>
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