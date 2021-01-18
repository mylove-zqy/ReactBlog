import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  visible: false,
  friends: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LEFT_VISIBLE:
      return state.set("visible", action.visible);
    case actionTypes.CHANGE_FRIEND_LINK:
      return state.set("friends", action.friends);
    default:
      return state;
  }
}
export default reducer;
