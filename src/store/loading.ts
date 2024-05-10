export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(value: boolean) {
      this.loading = value
    },
    startLoading() {
      this.setLoading(true)
    },
    stopLoading() {
      this.setLoading(false)
    },
  },
})
