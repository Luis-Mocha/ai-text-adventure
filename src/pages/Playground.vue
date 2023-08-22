<script>

export default {
	name: 'Playground',
	data() {
		return {

		}
	},
	created() {
	},
	methods: {
        
		test() {
		    console.log(`ehi ${import.meta.env.VITE_API_KEY}`);
		},
	}
}
</script>

<template>

    <h1 class="text-center">
        Playground
    </h1>

    <div class="container">
        <!-- stage template -->
        <div class="stage">

            <div class="stage-picture d-block">
                <!-- <img src="https://picsum.photos/seed/random/512/512" alt=""> -->
            </div>

            <div class="stage-content">
                <div class="stage-description">
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque quas repellat facilis, corporis, debitis similique veniam placeat ratione voluptas maxime sed iste? Dolore explicabo sit, possimus eum dolores eligendi! -->
                </div>

                <div class="stage-actions d-flex justify-content-center">
                    <button>
                        <!-- Azione 1 -->
                    </button>
                    <button>
                        <!-- Azione 2 -->
                    </button>
                    <button>
                        <!-- Azione 3 -->
                    </button>
                </div>

            </div>

        </div> <!-- fine stage -->

    </div> <!-- fine container -->

</template>

<style lang="scss" scoped>
@use '../style/main.scss';

h1 {
    color: green;
}

.stage-picture {
    height: 400px;
    width: 400px;
    margin: auto;

    background-image: url(/loader.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-color: gainsboro;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>