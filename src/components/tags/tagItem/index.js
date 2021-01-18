import Item from "antd/lib/list/Item";
import React, { memo } from "react";
import { TagItemWrap } from "./style";
import {
  changeHomePageAction,
  changeTagIdAction,
} from "@/pages/home/store/actionCreators";
import {withRouter} from 'react-router-dom'
import { useDispatch } from "react-redux";
export default withRouter(memo(function TagItem(props) {
  const { tag,ThemeColor } = props;
  const fontColor = props.color;
  // console.log(fontColor);
  const dispatch = useDispatch();
  //handle
  const handleTagClick = () => {
    
    dispatch(changeTagIdAction(tag.tag_id));
    dispatch(changeHomePageAction(1));
    window.scrollTo(0,0)
    props.history.push("/home");
  };
  return (
    <TagItemWrap color={tag.tag_color} fontColor={fontColor} ThemeColor={ThemeColor}>
      <span className="tag_name" onClick={() => handleTagClick()}>
        {tag.tag_name}
        <span style={{ marginLeft: "4px" }}>{tag.count}</span>
      </span>
      <span className="triangle"></span>
    </TagItemWrap>
  );
}));
