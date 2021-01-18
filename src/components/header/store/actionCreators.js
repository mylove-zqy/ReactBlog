import * as actionType from './constants'

//改变isHidden
export const changeIsHiddenAction  = (isHidden) =>{
  return {
    type:actionType.CHANGE_HEADER_IS_HIDDEN,
    isHidden
  }
}
//改变背景色
export const changeHeaderBackColorAction = (ThemeColor)=>{
  // console.log(ThemeColor);
  return {
    type:actionType.CHANGE_HEADER_BACK_COLOR,
    ThemeColor
  }
}

//改变头部字体颜色
export const changeHeaderFontColorAction=(fontColor)=>{
  // console.log(fontColor);
  return {
    type:actionType.CHANGE_HEADER_COLOR,
    fontColor
  }
}

//改变头部Hover颜色
export const changeHeaderHoverColorAction = (HoverColor)=>{
  // console.log(HoverColor);
  return {
    type:actionType.CHANGE_HEADER_HOVER_COLOR,
    HoverColor
  }
}