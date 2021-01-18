import * as actionTypes from "./constants";

import { getHomeArticles } from "@/network/home_request.js";
import {changeMainLoadingAction} from '@/pages/main/store/actionCreators'
export const changeCounterAction = (counter) => {
  return {
    type: actionTypes.CHANGE_COUNTER,
    counter,
  };
};
//获取文章信息
export const getHomeArticlesAction = (limit, page,tag_id) => {
 
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true))
    getHomeArticles(limit, page,tag_id).then((res) => {
      // console.log(res);
      dispatch(changeArticlesAction(res.data.articles));
      dispatch(changeArticleTotalAction(res.data.total));
      // console.log(res.data.total);
      dispatch(changeMainLoadingAction(false))
    });
  };
};
const changeArticlesAction = (articles) => {
  return {
    type: actionTypes.CHANGE_ARTICLES_ACTION,
    articles,
  };
};

//改变文章的标题颜色
export const changeHomeFontColor = (homeFontColor) => {
  return {
    type: actionTypes.CHANGE_HOME_FONT_COLOR,
    homeFontColor,
  };
};
const changeArticleTotalAction = (total) => {
  return {
    type: actionTypes.CHANGE_ARTICLE_TOTAL,
    total,
  };
};

//改变文章分页
export const changeHomePageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_HOME_PAGE,
    currentPage,
  };
};




//改变tag_id
export const changeTagIdAction =(tag_id)=>{
  return {
    type:actionTypes.CHANGE_HOME_TAG_ID,
    tag_id
  }
}