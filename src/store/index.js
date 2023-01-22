import { createStore } from 'vuex'

export default createStore({
  state: {
    touchesValues: [1,2,3,4,5,6,7,8,9,'*',0,'#'],

    divNumber: [],

    contacts: [ 
      {
          nom: 'Test Contact1',
          numero: '0606060607'
      },
      {
          nom: 'Test',
          numero: '0605080901'
      },
      {
        nom: 'Test Contact2',
        numero: '0602020202'
      },
      {
        nom: 'Test Contact3',
        numero: '0605050505'
      },
      {
        nom: 'Test Contact4',
        numero: '0601010101'
      },
      {
        nom: 'Test Contact5',
        numero: '0603030303'
      },
      {
        nom: 'Test Contact6',
        numero: '0604040404'
      },
      {
        nom: 'Test Contact7',
        numero: '0609090909'
      },
      {
        nom: 'Test Contact8',
        numero: '0606060606'
      },
      {
        nom: 'Test Contact9',
        numero: '0607070707'
      },
      {
        nom: 'Test Contact10',
        numero: '0608080808'
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
