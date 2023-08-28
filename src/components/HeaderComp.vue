<script>

    export default {
        name: 'Headercomp',
    }
    
</script>


<template>

    <header>
        
        <div class="container">
            <a href="/">
                <span>Ai.</span>Venture
            </a>
            
        </div>
    </header>
    

</template>

<style lang="scss" scoped>
@use '../style/main.scss';

header {
    // background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(18,73,39,1) 100%);
    background: linear-gradient(to top, #000000, #0f9b0f);
    color: white;

    height: 60px;

    a {
        font-size: 50px;
        letter-spacing: 4px;

        span {
            font-size: 40px;
            font-style: italic;
        }
    }
}
</style>