import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TagsWrap } from "./style";
import TagItem from "./tagItem";
import { AntCloudOutlined } from "@ant-design/icons";

export default memo(function Tags(props) {
  //获取全部标签
  //hooks

  const { color, ThemeColor } = props;
  const { homeFontColor, tags } = useSelector(
    (state) => ({
      tags: state.getIn(["right", "tags"]),
      homeFontColor: state.getIn(["home", "homeFontColor"]),
      tag_id: state.getIn(["home", "tag_id"]),
    }),

    shallowEqual
  );

  return (
    <TagsWrap>
      <hr color="#F3F3F3" />
      <div className="title">
        <span style={{ color: homeFontColor }}>标签云</span>
        <AntCloudOutlined style={{ color: homeFontColor }} />
      </div>
      <div className="tag_list">
        <TagItem
          ThemeColor={ThemeColor}
          color={color}
          tag={{ tag_id: -1, tag_name: "全部", tag_color: "#00FFB4" }}
        ></TagItem>
        {tags &&
          tags.map((item) => {
            return (
              <TagItem
                ThemeColor={ThemeColor}
                color={color}
                key={item.tag_id}
                tag={item}
              ></TagItem>
            );
          })}
      </div>
    </TagsWrap>
  );
});
