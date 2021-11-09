<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id" :class="[transaction.amount < 0 ? 'minus' : 'plus']">
            {{transaction.transaction}}
            <span>${{transaction.amount}}</span>
            <button class="delete-btn" @click="removeTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        transactions() {
            return this.$store.getters.transactions;
        }
    },
    methods: {
        removeTransaction(id) {
            this.$store.dispatch('removeTransaction', id);
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;

  li {
    background-color: #fff;
    box-shadow: $box-shadow;
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;

    &.plus {
      border-right: 5px solid #2ecc71;
    }

    &.minus {
      border-right: 5px solid #c0392b;
    }

    &:hover {
      .delete-btn {
        opacity: 1;
      }
    }
  }
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:focus {
    outline: 0;
  }
}
</style>