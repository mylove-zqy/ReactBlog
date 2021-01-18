import request from "./index";

//获取友链数据
export function getFriendLinks() {
  return request({
    url: "/friends/allLink",
    params: {
      type: 1,
    },
  });
}

//申请友链
export function applyLink(friendTitle, avaUrl, url, description, email) {
  return request({
    url: "/friends/add_friend",
    method: "post",
    data: {
      friendTitle,
      avaUrl,
      url,
      description,
      email,
    },
  });
}
//获取留言评论
export function getComments(){
  return request({
    url:'/comment/article_comment',
    params:{
      article_id:-1
    }
  })
}
