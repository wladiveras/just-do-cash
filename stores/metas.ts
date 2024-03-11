export const useMetaStore = defineStore({
  id: "metaStore",
  state: () => ({
    metas: {},
  }),
  actions: {
    async fetchMeta(key: string | string[]) {
      const keys = Array.isArray(key) ? key : [key];

      const queryParams = keys
        .map((k) => `key=${encodeURIComponent(k)}`)
        .join("&");

      const { error, data } = await useFetch(
        `/api/metas?key[]=1=key[]=color_prefer${queryParams}`,
        {
          headers: useRequestHeaders(["cookie"]),
        },
      );

      if (!error) {
        for (const k of keys) {
          // @ts-ignore
          this.updateMeta(k, data.value[k]);
        }
      }
    },
    updateMeta(key: string, newMeta: JSON | string | number | boolean) {
      // @ts-ignore
      this.metas[key] = newMeta;
    },
  },
});
