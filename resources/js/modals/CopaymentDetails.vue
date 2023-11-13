<script>
export default {
  props: ['copayment_details'],
  data() {
    return {
      copay_dets: this.copayment_details
    }
  }
}
</script>

<template>
  <div class="printout-table-container printout-copayment-container">
    <template v-for="detail in copay_dets">
      <tr>
        <td style="width: 100%">{{ detail.key }}: </td>
        <td style="font-weight: bold; text-align: right;">{{ detail.value }}</td>
      </tr>
    </template>
  </div>
</template>

<style>
.printout-copayment-container tr {
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ffffff;
    font-size: 20px;
    font-weight: bold;
}
</style>