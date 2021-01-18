import styled from "styled-components";

export const PlayerWrap = styled.div`
  margin-top: 20px;
  .box {
    background-color: white;
    height: 90px;
    display: flex;
    .img {
      position: relative;
      height: 100%;
      .icon {
        font-weight: bold;
        transition: all 0.5s;
        cursor: pointer;
        color: white;
        left: ${(props) => props.percentage + "%"};
        top: ${(props) => props.percentage + "%"};
        font-size: ${(props) => props.fontSize};
        transform: ${(props) => {
          return (
            "translate(" +
            "-" +
            props.percentage +
            "%," +
            "-" +
            props.percentage +
            "%)"
          );
        }};
        position: absolute;
      }
      img {
        height: 100%;
      }
    }
    .right_info {
      height: 100%;
      flex: 1;
      /* 歌名 */
      .song_info {
        padding-left: 5px;
        display: flex;
        align-items: center;
        .song_name {
          max-width:80%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          font-size: 16px;
          color: ${(props) => props.homeFontColor};
        }
        .singer {
          min-width:48px;
          transform: translateY(2px);
          color: #898989;
          font-size: 12px;
        }
      }
      /* 歌词 */
      .lyric {
        transform: translateY(10px);
        font-size: 12px;
        height: 20px;
        color: #898989;
        text-align: center;
      }

      /* 下部分 */
      .operation {
        padding-left: 5px;
        transform: translateY(20px);
        display: flex;
        align-items: center;
        .progress {
          flex: 1;
        }
        /* 右边宽度固定剩下的就是进度条 */
        .control {
          font-size: 12px;
          color: #898989;
          display: flex;
          padding: 0 10px;
          justify-content: space-between;
          width: 110px;
          .menu {
            cursor: pointer;
            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }
  .song_list{
    transition:all .6s;
    overflow:hidden;
    height:${props=>props.isHidden?"0":props.Length*31+"px"};
  }
  .song_list_item {
   
    color: #7b7b7b;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding:5px 0;
    border-bottom: 1px solid #eeeeee;
    &:hover {
      background-color: #e9e9e9;
      cursor: pointer;
    }
    span:nth-child(1) {
      margin-left: 6px;
    }
    span:nth-child(2) {
      margin-left: 10px;
    }
  }
`;
