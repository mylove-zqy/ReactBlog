import styled from "styled-components";

export const FriendItemList = styled.div`
  font-family: "楷体";
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .friend-item::before {
    background-image: linear-gradient(
      -225deg,
      #2cd8d5 0%,
      #c5c1ff 56%,
      #ffbac3 100%
    );
    content: "";
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transition: all 0.3s linear;
  }
  .friend-item:hover::before {
    height: 700%;
  }
  .friend-item:hover {
    box-shadow: 0 0 8px #00ffe4;

    color: white;
  }

  .friend-item:hover .avat {
    animation: rotation 0.3s linear;
    transform: rotate(360deg);
  }

  .friend-item {
    margin-top:10px;
    text-align: center;
    margin-left: 3%;
    background-color: white;
    overflow: hidden;
    position: relative;
    transition: all 0.3s linear;
    cursor: pointer;
    height: 90px;
    display: flex;
    align-items: center;
    width: 30%;
    padding: 10px 10px;
    border: 1px solid rgba(225, 225, 225, 0.83);
    border-radius: 4px;
    .left_wrap {
      z-index: 2;
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .avat {
      transition: all 0.3s linear;
      z-index: 2;
      width:80px;
      height:80px;
      border-radius: 50%;
      border: 1px dashed rgba(204, 204, 204, 0.63);
    }

    .title {
      padding-bottom: 10px;
      color: rgba(218, 138, 118, 0.8);
      font-size: 16px;
      font-weight: bold;
    }

    .des {
      color: #a4a4a4;
      padding-top: 10px;
      border-top: 2px dashed #eee;
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }

  @media not screen and (min-width: 60em) {
    .friend-item {
      width: 100%;
      margin-top:20px;
      margin-left: 0;
    }
  }
`;
