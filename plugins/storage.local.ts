export default defineNuxtPlugin(() => {
  /**
   * Usage:
   * const { $storage } = useNuxtApp()
   * $storage.setItem('dev', 'wladi')
   * $storage.getItem('dev')
   */
  return {
    provide: {
      storage: {
        getItem(item: string) {
          if (process.client) {
            return localStorage.getItem(item);
          } else {
            return undefined;
          }
        },

        setItem(item: string, value: any) {
          if (process.client) {
            return localStorage.setItem(item, value);
          }
        },
      },
    },
  };
})
