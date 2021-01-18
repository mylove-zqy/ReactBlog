import React, { memo,  useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Divider } from "antd";
import { TopInfoWrap } from "./style";
import {
  EnvironmentOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import {
  changeHeaderBackColorAction,
  changeHeaderFontColorAction,
  changeHeaderHoverColorAction,
} from "@/components/header/store/actionCreators";
import { changeHomeFontColor } from "../../../home/store/actionCreators";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export default memo(function TopInfo() {
  //state
  const [rotate, setRotate] = useState(0);

  //hooks
  const dispatch = useDispatch();
  const { ThemeColor, homeFontColor } = useSelector(
    (state) => ({
      ThemeColor: state.getIn(["header", "ThemeColor"]),
      homeFontColor: state.getIn(["home", "homeFontColor"]),
    }),
    shallowEqual
  );

  const handleMouseOver = () => {
    if (rotate === 0) {
      setRotate(360);
    } else if (rotate === 360) {
      setRotate(0);
    }
    dispatch(
      changeHeaderBackColorAction(
        rotate === 0 ? "rgb(40,54,70)" : "rgba(241, 131, 181,.7)"
      )
    );
    dispatch(changeHeaderFontColorAction(rotate ===0 ? "#B4B9BE" : "#616161"));
    dispatch(changeHeaderHoverColorAction(rotate === 0 ? "white" : "#1890FF"));
    dispatch(changeHomeFontColor(rotate === 0 ? "#1890FF" : "deeppink"));
    //切换header颜色
  };
  //other handle
  //定时器

  return (
    <TopInfoWrap
      ThemeColor={ThemeColor}
      homeFontColor={homeFontColor}
      rotate={rotate}
    >
      <div className="fixed_info">
        <img
          className="my_avat"
          onMouseOver={() => handleMouseOver()}
          src={
            rotate === 0
              ? "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat1.jpg"
              : "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat2.png"
          }
          alt=""
        />

        <div className="person_name">DingShiYi</div>
        <div className="school_info">
          <div>软件工程</div>
          <div>2018-2022 学生</div>
        </div>
        <div className="person_info">
          <div>
            <EnvironmentOutlined /> 四川 - 自贡
          </div>
          <div>前端: React + Redux + Antd Design</div>
          <div>后台: Vue + Element</div>
          <div>后端: Node + Mysql</div>
          <div>
            <MailOutlined /> 1559298665@qq.com
          </div>
          <div className="dubai">有很多想去的地方</div>
          <Divider orientation="center" style={{ color: homeFontColor }}>
            社交帐号
          </Divider>
          <div className="concat_ways">
            <div>
              <QqOutlined style={{ fontSize: "30px", color: homeFontColor }} />{" "}
              <img
                src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/qq.png"
                alt=""
              />{" "}
            </div>
            <div>
              <WechatOutlined
                style={{ fontSize: "30px", color: homeFontColor }}
              />{" "}
              <img
                src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/wechat.jpg"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </TopInfoWrap>
  );
});
