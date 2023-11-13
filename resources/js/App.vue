<template>
    <PrintoutHeader v-bind:header_details="header_details"/>
    <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 15px;">
        <PrintoutInfoTable v-bind:dictionaries="info" />
        <PrintoutInfoTable v-bind:dictionaries="info" />
    </div>
    <div style="margin-top: 10px;">
        <PrintoutNotes v-bind:notes="printout_notes"/>
    </div>
    <MedicationsTable v-bind:medications="medications"></MedicationsTable>
    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; column-gap: 15px;">
        <div></div>
        <PayementBreakdown v-bind:payment_breakdown="payment_breakdown"></PayementBreakdown>
        <CopaymentDetails v-bind:copayment_details="copayment_details"></CopaymentDetails>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Popup from './modals/Popup.vue'
import PrintoutInfoTable from './modals/PrintoutInfoTable.vue'
import MedicationsTable from './modals/MedicationsTable.vue'
import PayementBreakdown from './modals/PayementBreakdown.vue'
import CopaymentDetails from './modals/CopaymentDetails.vue'
import PrintoutHeader from './modals/PrintoutHeader.vue'
import PrintoutNotes from './modals/PrintoutNotes.vue'

export default {
    data() {
        return {
            element: 'Magic Button',
            localCount: 5,
            showPopup: false,
            info: [
                { 'key': 'Name', 'value': 'Fady Edward Sedky' },
                { 'key': 'Insurer', 'value': 'AXA' },
                { 'key': 'Policy Number', 'value': '45/XC/36139/0' },
                { 'key': 'Card Number', 'value': '45/XC/36139/0190/E/0' },
                { 'key': 'Co-payment', 'value': '20%' },
                { 'key': 'Provider Name', 'value': 'Yodawy' },
                { 'key': 'Prescriber', 'value': '--' },
                { 'key': 'Claim Number', 'value': '78915' }
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
                    'tags': ["TAG1", "TAG2"]
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
                    'tags': []
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
                    'tags': []
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
                    'tags': []
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
                    'tags': ["TAG1", "TAG2"]
                },
            ],
            payment_breakdown: [
                { 'key': 'Total Price', 'value': 114.850 },
                { 'key': 'Discount', 'value': 0.00 },
                { 'key': 'Remaining Amount', 'value': 114.850 },
                { 'key': 'Limit Surpass', 'value': 12.782 },
                { 'key': 'Co-payment Amount', 'value': 20.00 }
            ],
            copayment_details: [
                { 'key': 'By Patient', 'value': 20.20 },
                { 'key': 'By Insurer', 'value': 24.20 }
            ],
            header_details: {
                'timestamp': '31 Oct 23, 04:35 pm',
                'company_logo': 'https://upload.wikimedia.org/wikipedia/commons/9/94/AXA_Logo.svg',
                'title': 'Acute Claim Reference CR',
                'form_type': 'Claim Form',
                'status': 'Completed',
            },
            printout_notes: [
                { 'key': 'Provider Notes', 'value': 'no diagnosis'},
                { 'key': 'Payer Notes', 'value': 'centrum tablets uncovered' }
            ],
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
        MedicationsTable,
        PayementBreakdown,
        CopaymentDetails,
        PrintoutHeader,
        PrintoutNotes
    },
}
</script>

<style>
</style>