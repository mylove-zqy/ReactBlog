import React, { memo, useState, createElement } from "react";
import { Modal, Input, Comment, Tooltip, Avatar, message } from "antd";
import { CommentItemWrap } from "./style";
import { getArticleCommentListAction } from "@/pages/detail/store/actionCreators";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { handleTimeString } from "@/utils/format.js";
import { addComment } from "@/network/detail";
import { useDispatch } from "react-redux";
const { TextArea } = Input;

export default memo(function CommentItem(props) {
  //state and props
  const { item, article_id, levelId } = props;
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [comment, setComment] = useState("");

  //handles
  const showModal = () => {
    setVisible(true);
  };

  //hooks
  const dispatch = useDispatch();
  const hideModal = (type) => {
    if (type === 1) {
      //发送请求
      addComment({
        themeId: article_id,
        comment,
        fatherId: item.userId,
        userId: localStorage.getItem("userId"),
        levelId,
      }).then((res) => {
        const type = res.data.type;
        const Message = res.message;
        if (type) {
          //重新发一次请求
          dispatch(getArticleCommentListAction(article_id));
          message.success(Message);
          setComment("");
          //重新发一次请求
        } else {
          message.error(Message);
        }
      });
    }
    // console.log(type);
    setVisible(false);
  };

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const CommentChange = (e) => {
    setComment(e.target.value);
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={() => showModal()} style={{color:'#1890FF'}}>
      回复
    </span>,
  ];

  return (
    <CommentItemWrap>
      <Comment
        actions={actions}
        author={
          <a style={{fontSize:"12px",color:'#ff5777'}} href="#"> 
            {item.username}
            {item.type === 1 && <span className="upPerson">博主</span>}
          </a>
        }
        avatar={
          <Avatar  className="avatar" src={item.qqurl} alt={item.username} />
        }
        content={
          <p>
            {item.fathername && (
              <span className="comment_father">@{item.fathername}:</span>
            )}
            {item.comment}
          </p>
        }
        datetime={
          <Tooltip title={item.commentTime}>
            <span>{handleTimeString(item.commentTime)}</span>
          </Tooltip>
        }
      />
      <Modal
        title="输入您想说的话~"
        visible={visible}
        onOk={() => hideModal(1)}
        onCancel={() => hideModal(2)}
        okText="确认"
        cancelText="取消"
      >
        <Input
          placeholder={`回复@${item.username}`}
          style={{ borderRadius: "5px" }}
          disabled={true}
        />
        <TextArea
            value={comment}
          rows={4}
          onChange={(e) => CommentChange(e)}
          style={{ marginTop: "10px", borderRadius: "5px" }}
        />
      </Modal>
    </CommentItemWrap>
  );
});
