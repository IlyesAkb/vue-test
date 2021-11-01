export const state = () => ({
  items: [],
})

export const mutations = {
  add(state, item) {
    state.items.push(item)
  },
  setItems(state, newList) {
    state.items = newList
  },
}

export const actions = {
  addItem({ commit }) {
    const newItem = {
      id: Date.now(),
      text: Date.now().toString(),
    }
    commit('add', newItem)
  },

  removeItem({ commit, state }, idx) {
    const newItems = [...state.items]
    newItems.splice(idx, 1)
    commit('setItems', newItems)
  },
}
