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
          <td>
            {{ med.name }}
            {{ med.prescription }}
          </td>
          <td>{{ med.qty_unit }}</td>
          <td>{{ med.unit_price }}</td>
          <td>{{ med.total_price }}</td>
          <td>{{ med.approved_qty }}</td>
          <td>{{ med.total_approved }}</td>
          <td>{{ med.discount }}</td>
          <td>{{ med.net_amount }}</td>
        </tr>
        <tr class="printout-medication-tags">
          <span>Tags: </span>
          <span> {{ med.tags.join(', ') }}</span>
        </tr>
			</div>
		</template>
</template>