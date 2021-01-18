import React, { memo } from "react";
import { Drawer } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DrawerWrap } from "./style";
import TopInfo from "../../pages/rightbar/c-cpns/topInfo/index";
import Tags from "@/components/tags";
import { changeLeftVisibleAction } from "./store/actionCreators";

export default memo(function LeftDrawer() {
  //hooks
  const dispatch = useDispatch();

  const { visible, ThemeColor } = useSelector(
    (state) => ({
      visible: state.getIn(["drawer", "visible"]),
      ThemeColor: state.getIn(["header", "ThemeColor"]),
    }),
    shallowEqual
  );

  const onClose = () => {
    dispatch(changeLeftVisibleAction(false));
    // setVisible(false);
  };

  return (
    <DrawerWrap>
      <Drawer
        placement={"left"}
        drawerStyle={{ backgroundColor: ThemeColor, padding: 0, margin: 0 }}
        bodyStyle={{ padding: "20px 0 0 0" }}
        onClose={() => onClose()}
        visible={visible}
        key={"left"}
      >
        <div style={{ height: "100%", overflowY: "scroll" }}>
          <TopInfo ThemeColor={ThemeColor}></TopInfo>
          <Tags ThemeColor={ThemeColor} color="white"></Tags>
        </div>
      </Drawer>
    </DrawerWrap>
  );
});
