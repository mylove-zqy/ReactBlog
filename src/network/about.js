import request from "./index";
export function getAbout(){
  return request('/admin/aboutMe?type=1')
}