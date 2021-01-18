import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { LoginPanelWrap } from "./style";
import {
  changeLoginPanelShow,
  changeUserName,
} from "@/pages/main/store/actionCreators";
import { useState } from "react";
import { SendLetter, Login } from "@/network/main";
export default memo(function LoginPanel() {
  //hooks
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [testing, setTesting] = useState("发送验证码");
  const [disabled, setDisabled] = useState(false);
  let timer=null
  const { showLogin } = useSelector(
    (state) => ({
      showLogin: state.getIn(["main", "showLogin"]),
    }),
    shallowEqual
  );
  //otherHandle
  const seeLogin = () => {
    dispatch(changeLoginPanelShow(true));
  };
  const hideLogin = () => {
    dispatch(changeLoginPanelShow(false));
  };
  const send = () => {
    clearInterval(timer)
    SendLetter(email).then((res) => {
      // console.log(res)
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        //进行定时
        setDisabled(true)
        let i=60
        timer=setInterval(()=>{
          i--;
          setTesting(i+"s")
          if(i<=0){
            clearInterval(timer)
            setTesting("发送验证码")
            setDisabled(false)
          }
        },1000)
        message.success(Message);
      } else {
        message.error(Message);
      }
    });
  };
  const login = () => {
    Login(username, email, code).then((res) => {
      console.log(res);
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        //存本地
        localStorage.setItem("username", username);
        dispatch(changeUserName(username));
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("email", email);
        localStorage.setItem("token", res.data.token);
        message.success(Message);
        dispatch(changeLoginPanelShow(false));
      } else {
        message.error(Message);
      }
    });
  };
  return (
    <LoginPanelWrap showLogin={showLogin}>
      <div className="top item">QQ邮箱登录</div>
      {/* 输入部分 */}
      <div className="input item">
        <div className="email">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="QQ邮箱(以@结尾)"
            style={{ borderRadius: "6px" }}
            prefix={<MailOutlined />}
          />
          <Button type="primary" disabled={disabled} onClick={() => send()}>
           {testing}
          </Button>
        </div>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ marginTop: "20px", borderRadius: "6px" }}
          placeholder="验证码"
          prefix={<LockOutlined />}
        />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginTop: "20px", borderRadius: "6px" }}
          placeholder="您的笔名~~"
          prefix={<UserOutlined />}
        />
      </div>
      {/* 操作部分 */}
      <div className="operation item" style={{ marginTop: "10px" }}>
        <Button
          onClick={() => login()}
          type="primary"
          style={{ marginRight: "10px" }}
        >
          登录
        </Button>
        <Button onClick={() => hideLogin()} type="primary" danger>
          取消
        </Button>
      </div>
    </LoginPanelWrap>
  );
});
