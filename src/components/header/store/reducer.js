import * as actionType from "./constants";
import { Map } from "immutable";
const defaultState = Map({
  isHidden: false,
  ThemeColor: "rgba(241, 131, 181,.7)",
  fontColor: "#616161",
  HoverColor: "#1890FF",
  // ThemeColor: "rgb(40,54,70,7)",
  // fontColor: "#B4B9BE",
  // HoverColor: "white",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_HEADER_IS_HIDDEN:
      return state.set("isHidden", action.isHidden);
    case actionType.CHANGE_HEADER_BACK_COLOR:
      return state.set("ThemeColor", action.ThemeColor);
    case actionType.CHANGE_HEADER_COLOR:
      return state.set("fontColor", action.fontColor);
    case actionType.CHANGE_HEADER_HOVER_COLOR:
      return state.set("HoverColor", action.HoverColor);
    default:
      return state;
  }
}

export default reducer;
