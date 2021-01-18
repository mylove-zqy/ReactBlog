import React, { memo } from "react";

import { CommentWrap } from "./style";
import CommentItem from "./c-cpns/commentItem";
export default memo(function Comment(props) {
  const { article_id,commentList } = props;

  // 在这里获取到全部的评论
  //hooks
  return (
    <CommentWrap>
      {commentList &&
        commentList.map((item, index) => {
          return (
            <div key={item.id}>
              <CommentItem
                levelId={item.id}
                item={item}
                article_id={article_id}
              ></CommentItem>
              <div className="children">
                {item.children.map((item2) => {
                  return (
                    <CommentItem
                      article_id={article_id}
                      levelId={item.id}
                      item={item2}
                      key={item2.id}
                    ></CommentItem>
                  );
                })}
              </div>
            </div>
          );
        })}
      {commentList.length === 0 && (
        <div className="comment_tip">
          <h2>暂时没有评论哦,快来抢沙发٩(๑❛ᴗ❛๑)۶</h2>
        </div>
      )}
    </CommentWrap>
  );
});
