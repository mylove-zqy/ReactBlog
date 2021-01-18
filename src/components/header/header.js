import React, { Fragment, memo, useState } from "react";
import { HeaderWrapper } from "./style";
import { Menu, Dropdown, Modal, Button, Space, Input,message } from "antd";
import { NavLink } from "react-router-dom";
import {
  CaretUpOutlined,
  // CaretDownOutlined,
  BankOutlined,
  EditOutlined,
  BarChartOutlined,
  WechatOutlined,
  UserOutlined,
  MenuFoldOutlined,
  CaretDownOutlined,
  ExclamationCircleOutlined,
  MailOutlined,
  QqOutlined,
} from "@ant-design/icons";
import { changeLoginPanelShow } from "@/pages/main/store/actionCreators";
import { changeLeftVisibleAction } from "../drawer/store/actionCreators";
import { changMainMoveRight,changeUserName } from "@/pages/main/store/actionCreators";
import { changeIsHiddenAction } from "./store/actionCreators";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";

export default memo(function Header(props) {
  //state
  const tabList = [
    { title: "首页", index: 0, link: "/home" },
    { title: "实战", index: 1, link: "/battle" },
    { title: "归档", index: 2, link: "/life" },
    { title: "互动", index: 3, link: "/interact" },
    { title: "关于", index: 4, link: "/about" },
  ];
  const iconList = [
    <BankOutlined />,
    <EditOutlined />,
    <BarChartOutlined />,
    <WechatOutlined />,
    <UserOutlined />,
  ];

  //hook
  // useEffect(() => {}, []);

  //redux-hook
  const dispatch = useDispatch();
  const {
    isHidden = false,
    ThemeColor,
    fontColor,
    HoverColor,
    visible,
    moveRight,
    username,
  } = useSelector(
    (state) => ({
      isHidden: state.getIn(["header", "isHidden"]),
      ThemeColor: state.getIn(["header", "ThemeColor"]),
      fontColor: state.getIn(["header", "fontColor"]),
      HoverColor: state.getIn(["header", "HoverColor"]),
      visible: state.getIn(["drawer", "visible"]),
      moveRight: state.getIn(["main", "moveRight"]),
      username: state.getIn(["main", "username"]),
    }),
    shallowEqual
  );
  useEffect(() => {}, [username]);

  //handle
  const openDrawer = () => {
    dispatch(changeLeftVisibleAction(!visible));
  };

  const showLogin = () => {
    dispatch(changeLoginPanelShow(true));
  };
  const loginOut=()=>{
    localStorage.clear()
    dispatch(changeUserName(null))
    message.success("成功退出");
  }
  const menu = (
    <Menu>
      <Menu.Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       {!username  ? (
          <div onClick={() => showLogin()}>
            <QqOutlined /> <span>QQ邮箱登录</span>
          </div>
        ) : (
          <div onClick={()=>loginOut()}>{username}退出登录</div>
        )}
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      {tabList.map((item, index) => {
        return (
          <Fragment key={item.index}>
            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "110px",
              }}
            >
              <NavLink
                className="nav-link"
                exact
                to={item.link}
                style={{
                  padding: "5px  20px",
                }}
              >
                <div
                  style={{
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "70px",
                  }}
                >
                  <span className="tab-item-icon">{iconList[item.index]}</span>
                  <span className="tab-item-name">{item.title}</span>
                </div>
              </NavLink>
            </Menu.Item>
          </Fragment>
        );
      })}
      <Menu.Item>
        {!username  ? (
          <div onClick={() => showLogin()}>
            <QqOutlined /> <span>QQ邮箱登录</span>
          </div>
        ) : (
          <div onClick={()=>loginOut()}>{username}退出登录</div>
        )}
      </Menu.Item>
    </Menu>
  );

  //监听窗口滚动
  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (!isHidden && parseInt(scrollTop) >= 100) {
      dispatch(changeIsHiddenAction(!isHidden));
    }
    if (isHidden && parseInt(scrollTop) < 100) {
      dispatch(changeIsHiddenAction(!isHidden));
    }
  });
  // console.log(ThemeColor);
  return (
    <HeaderWrapper
      className="flex-wrap"
      ThemeColor={ThemeColor}
      isHidden={isHidden}
      HoverColor={HoverColor}
      fontColor={fontColor}
    >
      <div className="header-box flex-wrap">
        <div className="header-left">
          <div
            className="left-menu"
            style={{ cursor: "pointer", color: "white" }}
            onClick={() => openDrawer()}
          >
            <MenuFoldOutlined />
          </div>
          <div className="blog-info">
            <div
              className="blog-title"
              title="Loneliness后台管理系统"
              onClick={() => window.open("http://47.98.47.212/dist")}
            >
              Loneliness
            </div>
            <div className="some-sentence">万水千山，你愿意陪我一起看吗</div>
          </div>
          <div className="right-menu">
            <Dropdown overlay={menu2} placement="bottomCenter">
              <span
                className="icon-drop"
                style={{
                  color: HoverColor === "white" ? HoverColor : "",
                  marginRight: "18px",
                }}
              >
                <CaretUpOutlined
                  className="up"
                  style={{
                    padding: "18px",
                    top: 0,
                    marginRight: "18px",
                    position: "absolute",
                  }}
                ></CaretUpOutlined>
                <CaretDownOutlined
                  style={{
                    padding: "18px",
                    marginRight: "18px",
                    top: 0,
                    position: "absolute",
                  }}
                  className="down"
                />
              </span>
            </Dropdown>
          </div>
        </div>
        <div className="header-right">
          <div className="tab-list">
            {tabList.map((item, index) => {
              return (
                <div className="tab-item" key={item.index}>
                  <NavLink
                    className="nav-link"
                    exact
                    to={item.link}
                    onClick={() => dispatch(changMainMoveRight(false))}
                  >
                    <span className="tab-item-icon">
                      {iconList[item.index]}
                    </span>
                    <span className="tab-item-name">{item.title}</span>
                  </NavLink>
                </div>
              );
            })}
            <Dropdown overlay={menu} placement="bottomCenter">
              <span className="icon-drop">
                <CaretUpOutlined
                  className="up"
                  style={{
                    padding: "18px",
                    top: 0,
                    position: "absolute",
                  }}
                ></CaretUpOutlined>
                <CaretDownOutlined
                  style={{
                    padding: "18px",
                    top: 0,
                    position: "absolute",
                  }}
                  className="down"
                />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
});
// export default (Header);
