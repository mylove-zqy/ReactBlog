import * as actionTypes from "./constants";
//改变是否loading
export const changeMainLoadingAction = (loading) => {
  return {
    type: actionTypes.CHANGE_MAIN_LOADING,
    loading,
  };
};
//改变窗口的scrollTop
export const changeMainScrollTop = (scrollTop) => {
  return {
    type: actionTypes.CHANGE_MAIN_SCROLL_TOP,
    scrollTop,
  };
};

//改变右边栏的动画状态
export const changMainMoveRight = (moveRight) => {
  return {
    type: actionTypes.CHANGE_MAIN_MOVE_RIGHT,
    moveRight,
  };
};

//是否显示登陆界面
export const changeLoginPanelShow = (isShow) => {
  return {
    type: actionTypes.CHANGE_LOGIN_PANEL_SHOW,
    isShow,
  };
};

//改变username
export const changeUserName = (username) => {
  return {
    type: actionTypes.CHANGE_USERNAME,
    username,
  };
};
