<template>
    <form id="form-contact" @submit.prevent="ajoutContact">
        <input type="text" placeholder="Nom du contact" v-model="formContact.nom"><br>
        <span v-if="formContact.nom.length < 1 && error" class="error">Veuillez remplir la case nom svp</span>
        <input type="text" placeholder="Numéro du contact" v-model="formContact.numero"><br>
        <span v-if="formContact.numero == null && error" class="error">Veuillez remplir la case numéro svp</span><br>
        <span v-if="isNaN(formContact.numero) && error" class="error">Veuillez rentrer des numéros seulement svp</span>
        <div><button type="submit">Ajouter</button></div>

        <span v-if="validMessage" class="valid">Le contact a été ajouté</span>
    </form>
</template>

<script>
export default {
    name: 'FormContact',
    props: [
        'contacts'
    ],

    data() {
        return {
            error: false,
            
            formContact: {
                nom: '',
                numero: null,
            },

            validMessage: false,
        }
    },

    methods: {
        ajoutContact() {
            // if(this.formContact.nom == "" || this.formContact.numero == null) return


            if(this.formContact.nom.length < 1) {
                this.error = true
                return
            }

            if(this.formContact.numero == null || isNaN(this.formContact.numero) || this.formContact.numero == '' || this.formContact.numero == ' ') {
                this.error = true
                return
            }

            if(this.formContact.numero.length >= 1 && this.formContact.nom.length >= 1) {
                this.validMessage = true
            }


            if(this.contacts.find(contact => contact.numero == this.formContact.numero)) return
            // on ne peut pas rentrer 2 fois le même numéro


            this.$store.commit('ajoutContact', this.formContact)


            // this.formContact = {
            //     nom: '',
            //     numero: null,
            // }
        }
    }
}
</script>


<style scoped>

.valid {
    color: rgb(36, 206, 101);
}

.error {
    color: red;
}

label {
    font-size: 0.8rem;
}

input {
    width:100%;
    padding: 0.5rem;
    border: none;
    color: white;
    background-color: rgb(81, 82, 86);
    margin-bottom: 6px;
}

form div {
    display: flex;
    justify-content: center;
}

button {
    background-color: rgb(0, 101, 253);
    color: white;
    border: none;
    padding: 7px;
    cursor: pointer;
    margin-top: 20px;
}
</style>