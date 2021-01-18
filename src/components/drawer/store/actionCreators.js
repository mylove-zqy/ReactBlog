import * as actionTypes from "./constants";

//抽屉
export const changeLeftVisibleAction = (visible)=>{
  return {
    type:actionTypes.CHANGE_LEFT_VISIBLE,
    visible
  }
}

