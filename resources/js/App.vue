<template>
    <h1> This is a {{element}} that increments </h1>
    <button @click="count++"> Count: {{count}}</button>
</template>

<script>

export default {
    data() {
        return {
            count: this.$store.state.count,
            element: 'Magic Button'
        }
    }  
}
</script>

<style>
</style>