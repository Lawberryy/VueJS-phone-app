<template>
    <div class="add_contact">
        <h1>Ajoutez un nouveau contact</h1>
        <div class="form">
            <FormContact :contacts="contacts"/>
        </div>
    </div>
</template>


<script>
import FormContact from '@/components/FormContact.vue';

export default {
  name: 'AddContactView',
    components: {
        FormContact,
    },

    computed: { 
        contacts() {
            return this.$store.state.contacts
        }
    },

    data() {
        return {
            error: false,

            formContact: {
                nom: '',
                numero: null
            },
        }
    },
}
</script>


<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 70vh;
    }

    h1 {
        font-size: 1.5rem;
        text-align: center;
    }
</style>