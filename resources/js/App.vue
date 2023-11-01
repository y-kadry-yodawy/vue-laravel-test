<template>
    <h1> This is a {{element}} that increments </h1>
    <button @click="increment"> Count: {{count}}</button>
    <p> {{countPlusLocalState}} </p>

    <table>
    <tr v-for="med in medicationNames">
        <th>{{ med }}</th>
    </tr>
    </table>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            element: 'Magic Button',
            localCount: 5
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    },
    computed: {
        ...mapState({
            // arrow functions can make the code very succinct!
            count: state => state.count,

            // passing the string value 'count' is same as `state => state.count`
            countAlias: 'count',

            // to access local state with `this`, a normal function must be used
            countPlusLocalState (state) {
            return state.count + this.localCount
            }
        }),
        ...mapGetters([
            'medicationNames'
        ])
    }
}
</script>

<style>
</style>