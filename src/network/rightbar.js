import request from "./index";

//获取全部的标签
export function getAllTags() {
  return request("/tags/all_tags");
}
