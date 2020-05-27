const initialState = {
  max_life: 100,
  current_life: 100,

  max_special_attack: 20,
  current_special_attack: 20,

  equipped_chasis: null,
  equipped_wheels: null,

  acquired_chasis: [],
  acquired_wheels: [],
}

const playerReducer = (
  state = initialState,
  action,
  ) => {
  switch (action.type) {
    default:
      return state
  }
}

export default playerReducer;