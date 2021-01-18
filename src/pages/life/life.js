import React, { memo,useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Music from "./c-cpns/music";
import { LifeWrap } from "./style";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
export default memo(function Life() {
  const {fontColor} = useSelector(state=>({
    fontColor:state.getIn(['header','fontColor'])
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changMainMoveRight(true))
  },[dispatch])
  return (
    <LifeWrap fontColor={fontColor}>
      <div className="music">
        <p>我喜欢听的歌不多</p>
        <p style={{textAlign:"center"}}>歌曲库里只有40多首</p>
        <p style={{textAlign:"right"}}>我想把我喜欢的分享出来</p>
        
      </div>
      <Music></Music>
      <h1>Life</h1>
    </LifeWrap>
  );
});
