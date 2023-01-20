import { createStore } from 'vuex'

export default createStore({
  state: {
    // touches: [ 
    //   {
    //     value:
    //   }
    // ],

    touchesValues: [1,2,3,4,5,6,7,8,9,'*',0,'#'],

    divNumber: []
  },
  getters: {
  },
  mutations: {
    addInDivNumber(state, value) {
      state.divNumber.push(value)
    }
  },
  actions: {
  },
  modules: {
  }
})
