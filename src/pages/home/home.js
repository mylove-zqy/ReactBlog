import React, { memo, useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { NavLink } from "react-router-dom";

import ArticleItem from "./c-cpns/articleAitem/index";
import { HomeWrapper } from "./style";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

import { changeHomePageAction } from "@/pages/home/store/actionCreators";
import { useRef } from "react";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
export default memo(function Home(props) {
  const limit = 8;
  const [page, setPage] = useState(false);
  const pageRef = useRef();
  const dispatch = useDispatch();
  const {
    articles,
    homeFontColor,
    total,
    currentPage,
    scrollTop,
  } = useSelector(
    (state) => ({
      articles: state.getIn(["home", "articles"]),
      homeFontColor: state.getIn(["home", "homeFontColor"]),
      total: state.getIn(["home", "total"]),
      currentPage: state.getIn(["home", "currentPage"]),
      scrollTop: state.getIn(["main", "scrollTop"]),
    }),
    shallowEqual
  );
  useEffect(()=>{
    dispatch(changMainMoveRight(true))
  },[dispatch])
  useEffect(() => {
    const height = document.body.clientHeight;
    // console.log(HomeArticleItemRef.current.getBoundingClientRect().top, height);
    if (pageRef.current.getBoundingClientRect().top + 50 < height)
      setPage(true);
    else {
      setPage(false);
    }
  }, [scrollTop]);

  //other handle
  const onSearch = () => {
    //搜索
    console.log(2333);
  };
  const pageChange = (e) => {
    // setCurrentPage(e);
    dispatch(changeHomePageAction(e));
    window.scrollTo(0, 0, 1000);
    // console.log(e);
  };
  //跳转路由
  const GotoDetail = (id) => {
    props.history.push(`/detail/${id}`);
  };
  return (
    <HomeWrapper homeFontColor={homeFontColor}>
      <div className="home_content_header">
        <span className="info">
          博客日志 <span> {total} </span> 篇
        </span>
        <Input
          onChange={() => onSearch()}
          style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
          suffix={<SearchOutlined />}
        />
      </div>
      <div className="home_article_list">
        {articles.map((item, index) => {
          return (
            // <CSSTransition
            //   timeout={500}
            //   classNames="card"
            //   key={item.article_id}
            // >
            <div key={item.article_id}>
              <ArticleItem
                scrollTop={scrollTop}
                homeFontColor={homeFontColor}
                btnClick={(id) => GotoDetail(id)}
                item={item}
              ></ArticleItem>
            </div>
            // </CSSTransition>
          );
        })}
      </div>
      <div ref={pageRef}>
        <Pagination
          className={page ? "Pagination page" : "Pagination"}
          defaultCurrent={currentPage}
          total={total}
          showQuickJumper
          pageSize={limit}
          onChange={(e) => pageChange(e)}
        />
      </div>
    </HomeWrapper>
  );
});
