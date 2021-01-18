import React, { memo } from "react";
import { FriendItemList } from "./style";
export default memo(function FriendLink(props) {
  //props
  const { friends } = props;

  //handle
  const jump_link=(link)=>{
    window.open(link)
  }
  return (
    <FriendItemList>
      {friends &&
        friends.map((friend, index) => {
          return (
            <div className="friend-item" onClick={()=>jump_link(friend.url)} key={friend.id}>
              <div className="left_wrap">
                <div className="title">
                  <div>{friend.friendTitle}</div>
                </div>
                <div className="des">
                  <div>{friend.description}</div>
                </div>
              </div>
              <img className="avat" src={friend.avaUrl} alt="" />
            </div>
          );
        })}
    </FriendItemList>
  );
});
