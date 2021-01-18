import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  html: "",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ABOUT_HTML:
      return state.set("html", action.html);
    default:
      return state;
  }
}
export default reducer;
