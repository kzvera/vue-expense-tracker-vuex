<template>
  <div>
    <h2>Expense Tracker</h2>

    <div class="container">
      <balance></balance>
      <history></history>
      <transaction></transaction>
    </div>
  </div>
</template>

<script>
import Balance from './components/Balance.vue';
import History from './components/History.vue';
import Transaction from './components/Transaction.vue';

export default {
  components: {
    Balance,
    History,
    Transaction
  },
  created() {
    this.$store.dispatch('setTransactionHistory');
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
}

.container {
  margin: 30px auto;
  width: 350px;
}

h1 {
  letter-spacing: 1px;
  margin: 0;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}
</style>
