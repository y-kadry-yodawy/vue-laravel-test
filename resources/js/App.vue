<template>
    <h1> This is a {{element}} that increments </h1>
    <button @click="increment"> Count: {{this.$store.state.count}}</button>
    <button @click="increment"> Count: {{this.$store.state.count}}</button>
</template>

<script>

export default {
    data() {
        return {
            element: 'Magic Button'
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    }  
}
</script>

<style>
</style>