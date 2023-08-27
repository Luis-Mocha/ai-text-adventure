<script>

export default {
	name: 'Playground',
	data() {
		return {
            completeChat: [],
            selectedGenre: '',
		}
	},
	created() {
        this.setGenre()
	},
    mounted() {
        this.startGame(),
        this.setStage()
    },
	methods: {
        
		test() {
		    console.log(`ehi ${import.meta.env.VITE_API_KEY}`);
		},

        setGenre() {
            // definisco il titolo dinamico della pagina
            const genre = this.$route.params.genre;
            document.title = `Text Adventure | ${genre}`;

            // definisco il genere dell'avventura
            this.selectedGenre = this.$route.params.genre;
        },

        startGame() {
            // istruzioni inziali
            this.completeChat.push({
                role: 'system',
                content: 
                `Voglio che ti comporti come se fossi un classico gioco di avventura testuale. Io sarò il protagonista e giocatore principale. Non fare riferimento a te stesso. L'ambientazione di questo gioco sarà a tema ${this.selectedGenre}. Ogni ambientazione ha una descrizione di circa 200 caratteri seguita da una array di 3 azioni possibili che il giocatore può compiere. Una di queste azioni è mortale e termina il gioco.
                Non aggiungere mai altre spiegazioni. Non fare riferimento a te stesso. Le tue risposte sono solo in formato JSON come questo esempio:
                ###
                { 
                "description":"descrizione ambientazione",
                "actions":["azione 1", "azione 2", "azione 3"]
                }
                ###`
            });

            // genero il primo livello
        },

        // --- funzione per creare il "livello" ---
        async setStage() {
            const loader = document.getElementById('loader');

            // 1. Mostro il loader e interrogo chatgpt
            loader.classList.remove('d-none');

            const gtpResponse = await this.makeRequest('/chat/completions', {
                temperature: 0.7,
                model: import.meta.env.VITE_GPT_MODEL,
                messages: this.completeChat
            });

            console.log(gtpResponse); //test risposta gpt

            // 2. Inserisco la risposta gpt nello storico e la mostro (nascono il loader)
            loader.classList.add('d-none');

            const message = gtpResponse.choices[0].message;
            this.completeChat.push(message);

            // 3. Recupero il contenuto del messaggio per estrapolare la descrizione del livello e le possibili azioni
            const content = JSON.parse(message.content);
            // console.log(content);
            let actions = content.actions;
            let description = content.description;

            this.setStageDescription(description);

            this.setStageActions(actions);

            // nel caso di morte
            if (actions.length === 0) {
                this.setGameover(description);

                // 4. stampo la descizione del livello e le azioni
            } else {
                this.setStageDescription(description);

                this.setStageActions(actions);
            }

        },

        // --- funzione per effettuare una richiesta a chat gpt ---
        async makeRequest(endpoint, payload) {
            const url = import.meta.env.VITE_API_BASE_URL + endpoint;

            const response = await fetch (url, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            });

            const jsonResponse = await response.json();
            return jsonResponse;
        },

        // --- funzioni per stampare descrizione livello e azioni disponibili ---
        setStageDescription(param) {
            const stageDescription = document.querySelector('#stage-description')
            stageDescription.innerText = param;
        },
        setStageActions(param) {
            let actionsHtml = ''
            // Salva il contesto di this
            const self = this;

            param.forEach(element => {
                actionsHtml += `<button class="stage-action">${element}<button/>`
            });

            document.querySelector('#stage-actions').innerHTML = actionsHtml;

            // per ogni bottone al click
            const actionButtons = document.querySelectorAll('.stage-action');
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // recuper l'azione scelta                    
                    const selectedAction = button.innerText;

                    // nuovo messaggio verso chatgpt
                    self.completeChat.push({
                        role: 'user',
                        content: `${selectedAction}. Se questa azione è mortale l'elenco delle azioni è vuoto. Non dare altro testo che non sia un oggetto JSON. Le tue risposte sono solo in formato JSON come questo esempio:\n\n###\n\n{"description": "sei morto per questa motivazione", "actions": []}###`
                    });

                    // genero un nuovo livello
                    self.setStage();
                })
            });

        },

        // --- funzione per aprire la modale di Gameover ---
        setGameover(param) {
            const deathModal = new bootstrap.Modal(document.getElementById('death-modal'));

            const modalBody = document.querySelector('#death-modal .modal-body');
            modalBody.innerText = param;

            // deathModal.modal({show: "true"})
            deathModal.show();
        }
       
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

            <div id="loader" class="d-none">

            </div>

            <div class="stage-picture">
                <!-- va inserita l'immagine generata -->
            </div>

            <div class="stage-content">
                <div id="stage-description" class="stage-description">
                    <!-- descrizione dinamica del livello -->
                </div>

                <div id="stage-actions" class="stage-actions d-flex justify-content-center">
                    
                </div>

            </div>

        </div>

    </div>

    <!-- Modal -->
    <div class="modal fade " id="death-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="death-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="death-modalLabel">You died</h1>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/main.scss';

h1 {
    color: green;
}

#loader {
    height: 400px;
    width: 400px;
    margin: auto;
    background-image: url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHd4YTB2cmZtd3Zob2NqOWUyZDQ1eGxlZ25rbG0xY3JmMDM1dGx3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tA4R6biK5nlBVXeR7w/giphy.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-color: gainsboro;
}

.stage-picture {
    // height: 400px;
    // width: 400px;
    // margin: auto;

    // background-image: url('https://picsum.photos/seed/random/512/512');
    // background-repeat: no-repeat;
    // background-position: center;
    // background-color: gainsboro;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

// #death-modal {
    
// }

</style>