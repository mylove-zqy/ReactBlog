import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
export default memo(function Battle() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changMainMoveRight(true))
  },[dispatch])
  return (
    <div>
      <h1>这个页面还不知道写什么,我Giao</h1>  
    </div>
  )
})
