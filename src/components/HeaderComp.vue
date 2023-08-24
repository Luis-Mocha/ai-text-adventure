<script>

    export default {
        name: 'Headercomp',
    }
    
</script>


<template>

    <header>
        <div>Text Adventure</div>
    </header>
    

</template>

<style lang="scss" scoped>
@use '../style/main.scss';

header {
    // background-color: rgb(25, 64, 30);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(18,73,39,1) 100%);
    // background-color: transparent;
    color: white;
    font-size: 40px;

    height: 60px;
}
</style>