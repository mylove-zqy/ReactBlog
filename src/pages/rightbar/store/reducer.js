import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  tags: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RIGHT_TAGS:
      return state.set("tags", action.tags);
    default:
      return state;
  }
}
export default reducer;
