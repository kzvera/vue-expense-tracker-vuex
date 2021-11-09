<template>
    <section>
        <h3>Add new transaction</h3>
        <form id="form" @submit.prevent="submitTransaction">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" placeholder="Enter text..." v-model="transaction">
            </div>
            <div class="form-control">
                <label for="amount">Amount <br> (negative - expense, positive - income)</label>
                <input type="number" id="amount" placeholder="Enter amount..." v-model="amount">
            </div>
            <button class="btn" type="submit">Add transaction</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            transaction: '',
            amount: null
        }
    },
    methods: {
        submitTransaction() {
            const transaction = {
                transaction: this.transaction,
                amount: +this.amount,
                id: this.generateID()
            }

            this.$store.dispatch('addTransaction', transaction);

            this.transaction = '';
            this.amount = '';
        },
        generateID() {
            return Math.floor(Math.random() * 100000000);
        }
    }
    
}
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  margin: 10px 0;
}

input {
  &[type='text'],
  &[type='number'] {
    border: 1px solid #dedede;
    border-radius: 1px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
}

.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: $box-shadow;
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 0;
  }
}
</style>