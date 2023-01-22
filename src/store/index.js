import { createStore } from 'vuex'

export default createStore({
  state: {
    touchesValues: [1,2,3,4,5,6,7,8,9,'*',0,'#'],

    divNumber: [],

    contacts: [ 
      {
          nom: 'Contact1',
          numero: '0606060607'
      },
      {
          nom: 'Test',
          numero: '0605080901'
      },
      {
        nom: 'Contact2',
        numero: '0602020202'
      },
      {
        nom: 'Contact3',
        numero: '0605050505'
      },
      {
        nom: 'Contact4',
        numero: '0601010101'
      },
      {
        nom: 'Contact5',
        numero: '0603030303'
      },
      {
        nom: 'Contact6',
        numero: '0604040404'
      },
      {
        nom: 'Contact7',
        numero: '0609090909'
      },
      {
        nom: 'Contact8',
        numero: '0606060606'
      },
      {
        nom: 'Contact9',
        numero: '0607070707'
      },
      {
        nom: 'Contact10',
        numero: '0608080808'
      }
    ],

    appels: [
      {
        nom: 'Contact1',
        numero: '0606060607'
      },
    ]
  },
  getters: {
  },
  mutations: {
    addInDivNumber(state, value) {
      state.divNumber.push(value)
    },

    ajoutContact(state, contact) {
      state.contacts.push(contact)
    },

    ajoutAppel(state, contact) {
      state.appels.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
