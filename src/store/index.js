import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    invoiceModal: true
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal
    }
  },
  actions: {},
  modules: {}
})