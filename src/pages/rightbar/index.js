import React, { memo } from "react";
import { RightBarWrapper } from "./style";
import TopInfo from "./c-cpns/topInfo";
import Tags from "@/components/tags";
import { getRightTagsAction } from "./store/actionCreators";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
export default memo(function RightBar(props) {


  //hooks
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(getRightTagsAction());
  }, [dispatch]);

  return (
    <RightBarWrapper>
      <TopInfo></TopInfo>
      <Tags ThemeColor={null} color="black"></Tags>
    </RightBarWrapper>
  );
});
