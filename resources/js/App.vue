<template>
    <PrintoutInfoTable v-bind:dictionaries="info"/>
    <MedicationsTable v-bind:medications="medications"></MedicationsTable>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Popup from './modals/Popup.vue'
import PrintoutInfoTable from './modals/PrintoutInfoTable.vue'
import MedicationsTable from './modals/MedicationsTable.vue'

export default {
    data() {
        return {
            element: 'Magic Button',
            localCount: 5,
            showPopup: false,
            info: [
                {'key': 'Name', 'value': 'Fady Edward Sedky'},
                {'key': 'Insurer', 'value': 'AXA'},
                {'key': 'Policy Number', 'value': '45/XC/36139/0'},
                {'key': 'Card Number', 'value': '45/XC/36139/0190/E/0'},
                {'key': 'Co-payment', 'value': '20%'},
                {'key': 'Provider Name', 'value': 'Yodawy'},
                {'key': 'Prescriber', 'value': '--'},
                {'key': 'Claim Number', 'value': '78915'}
            ],
            medications: [
                {
                    'name': 'Otrivin 0.1% Adult Nasal Drops',
                    'prescription': '1 tablet, 3 times for 1 week, After meals',
                    'qty_unit': '2 dropper bottle',
                    'unit_price': 15.00,
                    'total_price': 30.00,
                    'approved_qty': '0 dropper bottle',
                    'total_approved': 0.00,
                    'discount': 0.00,
                    'net_amount': 0.00,
                    'tags': ["TAG1","TAG2"]
                },
                {
                    'name': 'Nexium 20 mg tablets',
                    'prescription': '1 tablet, 3 times for 1 week, After meals',
                    'qty_unit': '2 strip',
                    'unit_price': 15.00,
                    'total_price': 30.00,
                    'approved_qty': '2 strip',
                    'total_approved': 30.00,
                    'discount': 0.00,
                    'net_amount': 30.00,
                    'tags': ["TAG1","TAG2"]
                },
                {
                    'name': 'AUGMENTIN 1GM Tablet 14 Tablets / 2 STRIPS',
                    'prescription': '1 tablet, 3 times for 1 week, After meals',
                    'qty_unit': '2 strip',
                    'unit_price': 15.00,
                    'total_price': 30.00,
                    'approved_qty': '2 strip',
                    'total_approved': 30.00,
                    'discount': 0.00,
                    'net_amount': 30.00,
                    'tags': ["TAG1","TAG2"]
                },
                {
                    'name': 'AUGMENTIN 1GM Tablet 14 Tablets / 2 STRIPS',
                    'prescription': '1 tablet, 3 times for 1 week, After meals',
                    'qty_unit': '2 strip',
                    'unit_price': 15.00,
                    'total_price': 30.00,
                    'approved_qty': '2 strip',
                    'total_approved': 30.00,
                    'discount': 0.00,
                    'net_amount': 30.00,
                    'tags': ["TAG1","TAG2"]
                },
                {
                    'name': 'Otrivin 0.1% Adult Nasal Drops',
                    'prescription': '1 tablet, 3 times for 1 week, After meals',
                    'qty_unit': '2 dropper bottle',
                    'unit_price': 15.00,
                    'total_price': 30.00,
                    'approved_qty': '0 dropper bottle',
                    'total_approved': 0.00,
                    'discount': 0.00,
                    'net_amount': 0.00,
                    'tags': ["TAG1","TAG2"]
                },
            ]
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
    Popup,
    PrintoutInfoTable,
    MedicationsTable
},
}
</script>

<style></style>