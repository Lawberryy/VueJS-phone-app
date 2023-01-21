import { createStore } from 'vuex'

export default createStore({
  state: {
    touchesValues: [1,2,3,4,5,6,7,8,9,'*',0,'#'],

    divNumber: [],

    contacts: [ 
      {
          nom: 'Test Contact',
          numero: '06 06 06 06 07'
      },
      {
          nom: 'Test Contact',
          numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      },
      {
        nom: 'Test Contact',
        numero: '06 06 06 06 07'
      }
    ],
  },
  getters: {
  },
  mutations: {
    addInDivNumber(state, value) {
      state.divNumber.push(value)
    },

    ajoutContact(state, contact) {
      state.contacts.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
