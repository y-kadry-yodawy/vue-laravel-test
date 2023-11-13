<script>
export default {
  props: ['medications'],
  data() {
    return {
      meds: this.medications
    }
  }
}
</script>

<template>
  <table class="printout-tablehead printout-tablerowformat">
    <th>Medication Name</th>
    <th>Qty / Unit</th>
    <th>Unit Price</th>
    <th>Total Price</th>
    <th>Approved Qty</th>
    <th>Total Approved</th>
    <th>Discount</th>
    <th>Net Amount</th>
  </table>
  <template v-for="med, index in meds">
    <div class="printout-medication-container">
      <tr class="printout-medication-details printout-tablerowformat">
        <td class="printout-med-name-container">
          <div class="printout-med-name">
            {{ med.name }}
          </div>
          <div class="printout-med-prescription">
            {{ med.prescription }}
          </div>
        </td>
        <td>{{ med.qty_unit }}</td>
        <td>{{ med.unit_price }}</td>
        <td>{{ med.total_price }}</td>
        <td>{{ med.approved_qty }}</td>
        <td>{{ med.total_approved }}</td>
        <td>{{ med.discount }}</td>
        <td>{{ med.net_amount }}</td>
      </tr>
      <tr v-if="med.tags.length > 0" class="printout-medication-tags">
        <span>Tags: </span>
        <span> {{ med.tags.join(', ') }}</span>
      </tr>
    </div>
  </template>
</template>

<style>
.printout-tablerowformat {
  display: grid;
  grid-template-columns: 6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.printout-tablerowformat th,
td {
  text-align: left;
  padding: 0px 10px;
}

.printout-tablehead {
  padding: 10px 0px;
}

.printout-tablehead th {
  margin: auto 0px;
  font-weight: 600;
}

.printout-medication-container {
  outline: 1px solid #9491a3;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.printout-medication-details {
  height: 55px;
}

.printout-medication-details td{
  display: grid;
  align-items: center;
  margin: 5px 0px;
}

.printout-med-name-container {
  display: grid;
  grid-template-rows: 2fr 1fr;
}

.printout-med-name {
  vertical-align: middle;
  font-size: 16px;
  font-weight: bold;
}

.printout-medication-tags {
  padding: 10px;
}
</style>