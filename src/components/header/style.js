import styled from "styled-components";

export const HeaderWrapper = styled.div`
  z-index: 999;
  transition: all 0.4s;
  position: fixed;
  top: ${(props) => (props.isHidden ? "-50px" : "0")};
  left: 0;
  right: 0;
  height: 50px;
  background-color: ${(props) => props.ThemeColor};
  .header-box {
    width: 1140px;
    height: 100%;
    .header-left {
      .blog-info {
        display: flex;
        align-items: center;
        .blog-title {
          cursor: pointer;
          font-size: 22px;
          color: yellow;
          font-weight: 700;
        }
        .some-sentence {
          margin-top: 7px;
          margin-left: 10px;
          font-size: 12px;
          color: ${(props) => props.fontColor};
        }
      }

      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .left-menu {
        display: none;
      }
      .right-menu {
        display: none;
      }
    }
    .icon-drop {
      .up {
        display: none;
      }
      .down {
        display: block;
      }
      &:hover {
        .up {
          display: block;
        }
        .down {
          display: none;
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      height: 100%;
      width: 50%;
      .tab-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .tab-item {
          margin-right: 2%;

          cursor: pointer;
          .nav-link {
            font-size: 13px;
            color: ${(props) => props.fontColor};
            &:hover {
              color: ${(props) => props.HoverColor};
            }
          }

          .tab-item-icon {
            margin-right: 8px;
          }
        }

        .icon-drop {
          cursor: pointer;
          padding: 5px;
          &:hover {
            color: ${(props) => props.HoverColor};
          }
        }
      }
    }
  }

  @media not screen and (min-width: 75em) {
    .header-box {
      width: 100%;
      .header-left {
        padding-left: 20px;
      }
    }
  }

  /* 以下全是手机样式 */
  @media not screen and (min-width: 50em) {
    .header-box {
      .header-left {
        padding-left: 0;
        .blog-info {
          flex-direction: column;
          justify-content: center;
          .some-sentence {
            display: none;
          }
        }
        width: 100%;
        justify-content: space-around;
        .left-menu {
          display: block;
        }
        .right-menu {
          display: block;
        }
      }
      .header-right {
        display: none;
      }
    }
  }
`;
