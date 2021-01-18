import React, { memo } from "react";
//css
import { LoadingWrapper } from "./style";

export default memo(function Loading() {
  return (
    <LoadingWrapper className="flex-column-wrap">
      <div className="title flex-column-wrap">
        <h1>Long Time No See</h1>
        <span>全力加载中٩(๑`н´๑)۶</span>
      </div>
    </LoadingWrapper>
  );
});
