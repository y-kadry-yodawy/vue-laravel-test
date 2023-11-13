<script>
export default {
  props: ['header_details'],
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="printout-header">
    <div class="timestamp-container">
      {{ header_details.timestamp }}
    </div>
    <div class="title-container">
      <div class="title" style="font-size: 24px;">
        <span style="font-weight: bold;">{{ header_details.title }} </span> ({{ header_details.form_type }})
      </div>
      <div class="status" style="font-size: 18px;">
        Status: <span style="font-weight: bold;">{{ header_details.status }}</span>
      </div>
      
    </div>
    <div class="image-container">
      <img v-bind:src="header_details.company_logo">
    </div>
  </div>
</template>

<style>
.printout-header {
  height: 75px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

.title-container {
  margin: auto;
  text-align: center;
}

.title {
  text-align: center;
}

.status {
  text-align: center;
}

.image-container {
  margin-left: auto;
}

img {
  height: 60px;
}
</style>