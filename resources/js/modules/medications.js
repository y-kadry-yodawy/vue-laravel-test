

export const medicationsModule = {
    state() {
        return {
            medications: [
                {
                    name: "Medication A",
                    dosage: "10mg",
                    frequency: "once daily"
                },
                {
                    name: "Medication B",
                    dosage: "20mg",
                    frequency: "twice daily"
                },
                {
                    name: "Medication C",
                    dosage: "5mg",
                    frequency: "once daily"
                },
                {
                    name: "Medication D",
                    dosage: "15mg",
                    frequency: "three times daily"
                }
            ]
        }
    },
    getters: {
        medicationNames(state) {
            return state.medications.map(({ name }) => name);
        }
    }
}