import { about } from "@/api/about"
export default {
    namespaced: true,
    state: {
        data: null,
        loading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        async fetchAbout(ctx) {
            if (ctx.state.data) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await about()
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false)
        }
    }
}