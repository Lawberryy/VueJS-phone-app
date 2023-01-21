<template>
  <div class="contacts_page">
    <div><router-link to="/addcontact" class="plus">+</router-link></div>
    <!-- <h1>C'est la page contact</h1> -->
    <div v-for="contact in contacts" :key="contact.nom">
      <CardContact :contact="contact"/>
    </div>
  </div>
</template>


<script>
import CardContact from '@/components/CardContact.vue';

export default {
  name: 'ContactView',
  components: {
    CardContact,
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

.contacts_page div:last-child {
  margin-top: 0.8rem;
}
.plus {
  font-size: 20px;
  text-decoration: none;
  color: rgb(0, 101, 253);
}
</style>