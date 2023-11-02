<template>
    <h1> This is a {{element}} that increments </h1>
    <button @click="increment"> Count: {{count}}</button>
    <p> {{count}} </p>

    <table>
    <tr v-for="med in medicationNames">
        <th>{{ med }}</th>
    </tr>
    </table>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            element: 'Magic Button',
            localCount: 5
        }
    },
    methods: {
        ...mapMutations([
            'increment' // map `this.add()` to `this.$store.commit('increment')`
        ])
    },
    computed: {
        ...mapState({
            // arrow functions can make the code very succinct!
            count: state => state.count.count
        }),
        ...mapGetters([
            'medicationNames'
        ])
    }
}
</script>

<style>
</style>