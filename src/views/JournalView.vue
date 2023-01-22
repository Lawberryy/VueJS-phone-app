<template>
  <div class="journal">
    <h1>Journal des appels</h1>
    <div v-for="contact in appels" :key="contact.nom">
      <div class="cardJournal">
        <h2>{{contact.nom}}</h2>
        <span>{{contact.numero}}</span>
        <span class="appel-date">{{ contact.date }}</span>
        <img @click="ajoutAppel(contact)" class="phone-logo" src="@/assets/phone-solid.svg" alt="phone-logo">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  // components: {
    
  // },

  computed: {
			contacts() {
				return this.$store.state.contacts
			},
			appels() {
				return this.$store.state.appels
			}
		},
		methods: {
			ajoutAppel(contact) {
				this.$store.commit('ajoutAppel', {
          nom: contact.nom,
          // numero: contact.numero,
          date: this.currentDate()
        })
			},

      currentDate() {
        let date = new Date();
        let day = date.getDate() + '/' + (date.getMonth()) + '1' + '/' + date.getFullYear();
        let hour = date.getHours() + "h" + date.getMinutes();
        let timeofCall = 'le ' + day + ' à ' + hour;
        console.log(timeofCall);
        return timeofCall
      },
		}
}
</script>


<style scoped>
h1 {
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.cardJournal {
    background-color: rgb(81, 82, 86);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

h2 {
    font-size: 1rem;
    color: rgb(36, 206, 101);
}

.phone-logo {
    background-color: rgb(36, 206, 101);
    padding: 2px;
    cursor: pointer;
}

.appel-date {
  font-size: 0.8rem;
}
</style>