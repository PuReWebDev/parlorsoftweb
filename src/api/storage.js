export const storage = {
  store: window.localStorage,
  demo: true,
  get: (id) => {
    storage.store.getItem(id)
  },
  persist: (key,val) => {
    storage.store.setItem(key,val)
  },
  clearStorage: () => {
    if( storage.demo ) {
        storage.store.clear()
    }
  },
  getAll: () => {
    return storage.store.map((item,id) => {
        return {...item,...id}
    })
  },
  dumpAndClear: () => {
      console.warn("Running dump and clear is dangerous!")
      const content = storage.store.getAll()
      storage.store.clearStorage()
      return content
  }
}
