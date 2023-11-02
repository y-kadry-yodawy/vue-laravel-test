<template>
    <button id="show-modal" @click="showPopup = true">Show Modal</button>

    <teleport to="body">
        <popup :show="showPopup" @close="showPopup = false"></popup>
    </teleport>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Popup from './modals/Popup.vue'

export default {
    data() {
        return {
            element: 'Magic Button',
            localCount: 5,
            showPopup: false
        }
    },
    methods: {
        ...mapMutations({
            increment: 'increment' // map `this.add()` to `this.$store.commit('increment')`
        })
    },
    computed: {
        ...mapState({
            // arrow functions can make the code very succinct!
            count: state => state.count.count
        }),
        ...mapGetters({
            medicationNames: 'medications/medicationNames'
        })
    },
    components: {
        Popup
    },
}
</script>

<style></style>