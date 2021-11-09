import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      transactions: []
    }
  },
  mutations: {
    addTransaction(state, payload) {
      state.transactions.push(payload);
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    },
    removeTransaction(state, payload) {
      state.transactions = state.transactions.filter(transaction => transaction.id !== payload);
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    },
    setTransactionHistory(state) {
      const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
      state.transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
    }
  },
  actions: {
    addTransaction(context, payload) {
      context.commit('addTransaction', payload);
    },
    removeTransaction(context, payload) {
      context.commit('removeTransaction', payload);
    },
    setTransactionHistory(context) {
      context.commit('setTransactionHistory');
    }
  },
  getters: {
    transactions(state) {
      return state.transactions;
    },
    amounts(_, getters) {
        return getters.transactions.map(transaction => transaction.amount);
    },
    balance(_, getters) {
        return getters.amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    },
    income(_, getters) {
        return getters.amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    },
    expense(_, getters) {
        return (getters.amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    }
  }
})
