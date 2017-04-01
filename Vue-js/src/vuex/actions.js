export const addEmail = ({ dispatch }) => {
  dispatch('ADD_EMAIL')
}

export const updateActiveEmail = ({ dispatch }, email) => {
  dispatch('SET_ACTIVE_EMAIL', email)
}
