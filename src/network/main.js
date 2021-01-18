import request from "./index";

//发送邮箱验证码
export function SendLetter(email) {
  return request({
    url: "/user/sendMailer",
    method: "post",
    data: {
      email,
    },
  });
}

export function Login(username, email, code) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      username,
      email,
      code,
    },
  });
}
