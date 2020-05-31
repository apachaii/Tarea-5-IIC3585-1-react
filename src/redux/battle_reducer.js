const initialState = {
  enemy_level: 1,

  enemy_life: 100,
  battle_text: ["HOla", "que ", "tal","HOla", "que ", "tal","HOla", "que ", "tal",],
}

const battleReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default battleReducer;