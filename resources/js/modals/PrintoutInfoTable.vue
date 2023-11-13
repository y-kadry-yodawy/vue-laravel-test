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
	<div class="printout-infotable-container">
		<template v-for="dict, index in dictionaries">
			<tr>
				{{ dict.key }}: <span style="font-weight: bold;">{{ dict.value }}</span>
			</tr>
		</template>
</div>
</template>