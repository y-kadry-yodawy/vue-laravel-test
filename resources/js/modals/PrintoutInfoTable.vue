<script>
export default {
  props: ['dictionaries'],
  data() {
    return {
      dicts: this.dictionaries
    }
  }
}
</script>

<template>
  <div class="printout-table-container printout-infotable-container">
    <template v-for="dict, index in dictionaries">
      <tr>
        {{ dict.key }}: <span style="font-weight: bold;">{{ dict.value }}</span>
      </tr>
    </template>
  </div>
</template>

<style>
.printout-infotable-container tr {
    height: 20px;
    line-height: 20px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>