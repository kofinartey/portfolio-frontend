// localStorage.setItem("theme", JSON.stringify(false))

const initialState = JSON.parse(localStorage.getItem("theme"));
export const switchTheme = () => {
  return {
    type: "SWITCH_THEME",
  };
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const newState = !state;
      localStorage.setItem("theme", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default themeReducer;
