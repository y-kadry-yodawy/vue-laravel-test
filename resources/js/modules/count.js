
export const countModule = {
    state() {
        return {
            count: 5,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
}