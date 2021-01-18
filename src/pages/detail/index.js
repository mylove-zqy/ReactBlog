import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailAction,
  getArticleCommentListAction,
} from "./store/actionCreators";
import { DetailWrapper } from "./style";
import { Divider, Button, message } from "antd";
import { TagsOutlined } from "@ant-design/icons";
import { changeArticleReadingCount, addComment } from "../../network/detail";
import { handleTimeStamp, handleTimeString } from "@/utils/format.js";
import Comment from "../../components/comment";

import {
  ScheduleOutlined,
  MessageOutlined,
  RiseOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";

import { Input } from "antd";

const { TextArea } = Input;

export default memo(function ArticleDetail(props) {
  // console.log(23333);

  //props and state
  const article_id = props.location.pathname.split("/")[2];
  const [comment, setComment] = useState("");
  //hooks
  const dispatch = useDispatch();
  useEffect(() => {
    //滚动到顶部
    window.scrollTo(0, 0);
    dispatch(getArticleDetailAction(article_id));
    //更新文章的浏览量
    changeArticleReadingCount(article_id);
    //获取文章的评论列表
    dispatch(getArticleCommentListAction(article_id));
  }, [dispatch,article_id]);
  const { articleDetail, homeFontColor, commentList } = useSelector(
    (state) => ({
      articleDetail: state.getIn(["detail", "articleDetail"]),
      homeFontColor: state.getIn(["home", "homeFontColor"]),
      commentList: state.getIn(["detail", "commentList"]),
    }),
    shallowEqual
  );
  const submitComment = () => {
    addComment({
      themeId: article_id,
      comment,
      fatherId: -1,
      userId: localStorage.getItem("userId"), //这里到时候登陆成功会返回一个id
      levelId: -1, //从这里发出的评论的levelId都是-1
    }).then((res) => {
      const Message = res.message;
      const type = res.data.type;
      if (type) {
        dispatch(getArticleCommentListAction(article_id));
        message.success(Message);
        setComment("");
      } else {
        message.error(Message);
      }
    });
  };
  const TextAreaChange = (e) => {
    // console.log(e);
    setComment(e.target.value);
  };
  const { tags = [] } = articleDetail || [];
  return (
    <DetailWrapper homeFontColor={homeFontColor}>
      <div className="detail_header">
        <div
          className="home"
          onClick={() => {
            props.history.push("/home");
          }}
        >
          {" "}
          首页 &nbsp;
        </div>
        <div> / {articleDetail.title}</div>
      </div>
      <div className="detail_all_info">
        <div className="detail_title">{articleDetail.title}</div>
        <div className="detail_info">
          <div className="time">
            <div></div>
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {handleTimeStamp(articleDetail.createTime)}
          </div>
          <div className="readingCount">
            <RiseOutlined style={{ fontSize: "16px", color: "red" }} />{" "}
            {articleDetail.readingCount}
          </div>
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} />{" "}
            {articleDetail.commentCount}
          </div>
        </div>
        {articleDetail.faceUrl && (
          <div className="detail_image">
            <img src={articleDetail.faceUrl} alt="兴趣使然的前端技术小站" title="兴趣使然的前端技术小站" />
          </div>
        )}
        {articleDetail.audioUrl && (
          <div className="audio">
            <Divider orientation="center" style={{ color: "#3c78d8" }}>
              视频介绍
            </Divider>
            <video controls="controls" src={articleDetail.audioUrl}></video>
          </div>
        )}
      </div>
      <Divider orientation="center" style={{ color: "#3c78d8", fontSize: 18 }}>
        正文
      </Divider>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: articleDetail.html }}
      ></div>

      <hr />
      <div className="article_tags">
        <div>
          <TagsOutlined style={{ fontSize: "23px", color: "#1890FF" }} />
          {tags.map((item, index) => {
            return (
              <span
                key={item.tag_id}
                className="tag_item"
                style={{ color: "white", backgroundColor: item.tag_color }}
              >
                {item.tag_name}
              </span>
            );
          })}
        </div>
        <div className="modifyTime">
          最后修改于:{handleTimeString(articleDetail.modifyTime)}
        </div>
      </div>
      <Divider orientation="center" style={{ fontSize: "30px" }}>
        <MailOutlined style={{ color: "#ff5777", padding: "0 10px" }} />
        <QqOutlined style={{ color: "#1B92FF", padding: "0 10px" }} />
        <WechatOutlined style={{ color: "#1CD66C", padding: "0 10px" }} />
      </Divider>
      {/* 下面是评论 组件传一个数组进去*/}

      <div className="comment_input_wrap">
        {articleDetail.openComment == 1 ? (
          <div>
            <Comment
              commentList={commentList}
              article_id={article_id}
            ></Comment>
            <div className="input_and_submit">
              <hr className="parting-line" />
              <div className="dsy_tip">可以在这里发表您的看法或则建议~~</div>
              <TextArea
                placeholder="请输入内容"
                rows={4}
                onChange={(e) => TextAreaChange(e)}
                value={comment}
              />
              <Button
                onClick={() => submitComment()}
                style={{ float: "right", marginTop: "15px" }}
                type="primary"
              >
                提交评论
              </Button>
            </div>
          </div>
        ) : (
          <h1>本文章关闭了评论回复权限</h1>
        )}
      </div>
    </DetailWrapper>
  );
});
