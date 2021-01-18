import * as actionTypes from "./constants";

import {getAllTags} from '@/network/rightbar.js'
//获取全部标签
export const getRightTagsAction =()=>{
  return dispatch=>{
    getAllTags().then(res=>{
      dispatch(changeRightTagsAction(res.data.tags))
      console.log(res);
    })
  }
}
//改变全部标签
const changeRightTagsAction =(tags)=>{
  return {
    type:actionTypes.CHANGE_RIGHT_TAGS,
    tags
  }
}