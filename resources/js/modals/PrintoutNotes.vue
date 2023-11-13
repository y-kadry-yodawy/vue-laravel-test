<script>
export default {
  props: ['notes'],
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="printout-table-container printout-paybreak-container">
    <template v-for="detail in notes">
      <tr>
        <span style="font-weight: bold;">{{ detail.key }}: </span>{{ detail.value }}
      </tr>
    </template>
  </div>
</template>

<style>
.printout-paybreak-container tr {
    height: 20px;
    line-height: 20px;
    background-color: #ffffff;
}
</style>