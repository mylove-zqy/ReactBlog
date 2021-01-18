import React, { memo,useEffect} from "react";

import { AboutWrap } from "./style";
import { useSelector,shallowEqual, useDispatch } from "react-redux";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
export default memo(function About() {
  const { html } = useSelector(
    (state) => ({
      html: state.getIn(["about", "html"]),
    }),
    shallowEqual
  );
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changMainMoveRight(true))
  },[dispatch])
  return (
    <AboutWrap>
      <div
        className="markdown-body"
        style={{ width: "100%" }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </AboutWrap>
  );
});
