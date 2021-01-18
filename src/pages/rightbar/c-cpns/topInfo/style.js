import styled from "styled-components";

export const TopInfoWrap = styled.div`


  padding: 15px 10px;
  text-align: center;
  .dubai {
    font-weight: bold;
    font-family: "楷体";
    font-size: 15px;
    padding-top: 10px;
    color: ${(props) => props.homeFontColor};
  }
  .my_avat {
    width: 110px;
    border-radius: 50%;
    transition: all 0.5s linear;
    transform: ${(props) => `rotate(${props.rotate}deg)`};
    animation: shadow 2s infinite;
    img {
      width: 100%;
    }
  }
  @keyframes shadow {
    0% {
      box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px purple,
        0 0 5px purple, 0 0 11px pink;
    }
    100% {
      box-shadow: 0 0 5px #fff, 0 0 10px #ff0, 0 0 15px #ff0, 0 0 8px green,
        0 0 10px green, 0 0 12px #00f;
    }
  }

  .person_name {
    padding: 7px 0;
    font-size: 19px;
    font-weight: 600;
    color: ${(props) => props.homeFontColor};
    /* color:#FF69B4; */
  }
  .school_info {
    font-size: 13px;
    color: #119e82;
    padding: 5px 0;
  }
  .person_info {
    /* color:#999d9c; */
    color: #7f7f7f;
    font-size: 13px;
  }
  .concat_ways {
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.homeFontColor};
    div {
      position: relative;
      cursor: pointer;
      &:hover {
        img {
          opacity: 1;
          display: inline-block;
          transform: translate(-50%, -100%);
        }
      }
      img {
        transition: all 0.4s;
        opacity: 0;
        display: none;
        transform: translate(-50%, -80%);
        left: 50%;
        position: absolute;
        width: 100px;
        height: 100px;
      }
    }
  }
`;
