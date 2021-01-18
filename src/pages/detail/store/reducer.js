import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  articleDetail: {},
  commentList: [], //评论的数组
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_DETAIL:
      return state.set("articleDetail", action.articleDetail);
    case actionTypes.CHANGE_ARTICLE_COMMENT_LIST:
      return state.set("commentList", action.commentList);
    default:
      return state;
  }
}
export default reducer;
