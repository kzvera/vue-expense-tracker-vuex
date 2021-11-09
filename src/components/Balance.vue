<template>
    <section>
        <h4>Your Balance</h4>
        <h4 id="balance">${{balance}}</h4>

        <div class="inc-exp-container">

            <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+${{income}}</p>
            </div>

            <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-${{expense}}</p>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    computed: {
        balance() {
            return this.$store.getters.balance;
        },
        income() {
            return this.$store.getters.income;
        },
        expense() {
            return this.$store.getters.expense;
        }
    }
}
</script>

<style lang="scss" scoped>
.inc-exp-container {
  background-color: #fff;
  box-shadow: $box-shadow;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  &>div {
    flex: 1;
    text-align: center;

    &:first-of-type {
      border-right: 1px solid #dedede;
    }
  }
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;

  &.plus {
    color: #2ecc71;
  }

  &.minus {
    color: #c0392b;
  }
}

#balance {
    font-size: 30px;
}
</style>