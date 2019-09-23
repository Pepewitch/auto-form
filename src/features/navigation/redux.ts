const initialState = {
  show: false
};

enum ACTION {
  NAVIGATION_SHOW_CHANGE = "NAVIGATION_SHOW_CHANGE"
}

const navigationShowChangeAction = (show: boolean) => {
  return {
    type: ACTION.NAVIGATION_SHOW_CHANGE,
    payload: show
  };
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION.NAVIGATION_SHOW_CHANGE:
      return { ...state, show: action.payload };
    default:
      return state;
  }
};
