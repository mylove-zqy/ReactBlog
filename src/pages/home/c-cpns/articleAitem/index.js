import React, { memo, useState } from "react";
import { HomeArticleItem } from "./style";
import { handleTimeStamp } from "@/utils/format.js";
// import { useSelector, shallowEqual } from "react-redux";
import {
  ScheduleOutlined,
  MessageOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useRef } from "react";
export default memo(function ArticleItem(props) {
  const { item, btnClick } = props;
  const HomeArticleItemRef = useRef();
  const [isShow, setIsShow] = useState(false);

  const { scrollTop ,homeFontColor} = props;
  useEffect(() => {
    const height = document.body.clientHeight;
    // console.log(HomeArticleItemRef.current.getBoundingClientRect().top, height);
    if (HomeArticleItemRef.current.getBoundingClientRect().top + 50 < height)
      setIsShow(true);
    else {
      setIsShow(false);
    }
  }, [scrollTop]);

  return (
    <HomeArticleItem
      ref={HomeArticleItemRef}
      homeFontColor={homeFontColor}
      isShow={isShow}
    >
      <div onClick={() => btnClick(item.article_id)}>
        <h2 className="title">{item.title}</h2>
        <div className="article_info">
          <div className="time">
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {handleTimeStamp(item.createTime)}
          </div>

          {item.tags.map((item2) => {
            return (
              <span
                key={item2.tag_id}
                className="tag_item"
                style={{ backgroundColor: item2.tag_color }}
              >
                {item2.tag_name}
              </span>
            );
          })}

          <div className="readingCount">
            <FireOutlined style={{ fontSize: "16px", color: "red" }} />{" "}
            {item.readingCount}
          </div>
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} /> {item.commentCount}
          </div>
        </div>
        {item.faceUrl && (
          <div className="image_box flex-wrap">
            <img src={item.faceUrl} alt="" />
          </div>
        )}
        <div className="des">{item.des}</div>
        <div className="view_all"></div>
      </div>
    </HomeArticleItem>
  );
});
