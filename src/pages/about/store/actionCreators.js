import * as actionTypes from "./constants";
import { getAbout } from "@/network/about.js";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
//获取HTML
export const getAboutHtmlAction = () => {
  return (dispatch) => {
    getAbout().then((res) => {
      dispatch(changeAboutHtmlAction(res.data.row.html));
    });
  };
};
const changeAboutHtmlAction = (html) => {
  return {
    type: actionTypes.CHANGE_ABOUT_HTML,
    html,
  };
};
