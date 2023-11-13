<script>
export default {
  props: ['payment_breakdown'],
  data() {
    return {
      pay_break: this.payment_breakdown
    }
  }
}
</script>

<template>
  <div class="printout-table-container printout-paybreak-container">
    <template v-for="detail in pay_break">
      <tr style="display: flex; align-content: space-between;">
        <td style="margin-right: auto;">{{ detail.key }}: </td>
        <td style="font-weight: bold; text-align: right;">EGP {{ detail.value }}</td>
      </tr>
    </template>
  </div>
</template>

<style>
.printout-paybreak-container {
    padding: 5px 0px;
}
.printout-paybreak-container tr {
    height: 20px;
    line-height: 20px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ffffff;
}
</style>