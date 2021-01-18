//合并reducer
import { combineReducers } from "redux-immutable";
//首页
import { reducer as homeReducer } from "@/pages/home/store";
//头部
import { reducer as headerReducer } from "@/components/header/store/index";
//详情页
import { reducer as detailReducer } from "@/pages/detail/store";
//左边抽屉
import { reducer as drawerReducer } from "../components/drawer/store";
//互动页面
import { reducer as interactReducer } from "@/pages/interact/store";
//归档页面
import { reducer as lifeReducer } from "@/pages/life/store";
//关于界面
import { reducer as aboutReducer } from "@/pages/about/store";
//main里面
import { reducer as MainReducer } from "@/pages/main/store";
//右边栏
import { reducer as rightReducer } from "@/pages/rightbar/store";
const cReducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  detail: detailReducer,
  drawer: drawerReducer,
  interact: interactReducer,
  life: lifeReducer,
  about: aboutReducer,
  main: MainReducer,
  right: rightReducer,
});

export default cReducer;
