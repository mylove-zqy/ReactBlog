import React, { memo, Suspense, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ContentWrapper } from "./style";
import routes from "@/router";
// import Loading from "../../components/loading/loading";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RightBar from "../rightbar";
import LeftDrawer from "@/components/drawer";
import BackTop from "@/components/backTop/index";
import LoginPanel from '@/components/loginPanel'
import { getHomeArticlesAction } from "../home/store/actionCreators";
import { getFriendLinksAction } from "../interact/store/actionCreators";
import {
  getSongListAction,
  getCurrentSongAction,
} from "../life/store/actionCreators";
import { getAboutHtmlAction } from "../about/store/actionCreators";
import {
  changeMainScrollTop,
  changMainMoveRight,
} from "./store/actionCreators";
import { Spin } from "antd";
import {changeUserName } from "@/pages/main/store/actionCreators";
// import {getArticleCommentListAction} from '../detail/store/actionCreators'
export default memo(function DSYMain() {
  const { currentPage,tag_id } = useSelector(
    (state) => ({
      currentPage: state.getIn(["home", "currentPage"]),
      tag_id: state.getIn(["home", "tag_id"]),
    }),
    shallowEqual
  );

 
  const limit = 8;
  const dispatch = useDispatch();
    useEffect(()=>{
      let username=localStorage.getItem("username")
      dispatch(changeUserName(username))
    },[dispatch])

  useEffect(() => {
    //获取友链
    dispatch(getFriendLinksAction());
    //获取评论列表
    // dispatch(getArticleCommentListAction(-1))
    //获取歌单
    dispatch(getSongListAction());
    //获取当前歌词
    dispatch(getCurrentSongAction(487885426));
    //获取关于我
    dispatch(getAboutHtmlAction());
    //监听windows 改变scrollTop
    listener();
  }, [dispatch, currentPage]);
  const listener = () => {
    window.addEventListener("scroll", (e) => {
      dispatch(
        changeMainScrollTop(
          document.documentElement.scrollTop || document.body.scrollTop
        )
      );
    });
  };

  useEffect(() => {
    //获取首页文章列表
    dispatch(changMainMoveRight(true))
    dispatch(getHomeArticlesAction(limit, currentPage,tag_id))//这个-1就是tag_id;
  }, [currentPage,tag_id]);
  const { loading, moveRight } = useSelector(
    (state) => ({
      loading: state.getIn(["main", "loading"]),
      moveRight: state.getIn(["main", "moveRight"]),
    }),
    shallowEqual
  );
  return (
    <HashRouter>
      <BackTop></BackTop>
      <LoginPanel></LoginPanel>
      <Header />
      <LeftDrawer></LeftDrawer>
      <Suspense fallback={<h1>加载中....</h1>}>
        <ContentWrapper className="flex-wrap" moveRight={moveRight}>
          <div className="left-content">
            <Spin size="large" style={{ top: "100px" }} spinning={loading}>
              {renderRoutes(routes)}
            </Spin>{" "}
          </div>
          <div className="right-bar">
            <RightBar></RightBar>
          </div>
        </ContentWrapper>
      </Suspense>
      <Footer />
    </HashRouter>
  );
});
