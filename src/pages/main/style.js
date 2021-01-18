import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 60px;
  align-items: flex-start;

  .left-content {
    width: 890px;
    /* z-index:2; */
    border: 1px solid #f2ebeb;
    background-color: rgba(255, 255, 255, 0.2);

    border-radius: 5px;
    margin-right: 10px;
  }
  .right-bar {
    min-width: 240px;
    animation: ${(props) => (props.moveRight ? "move_right 0.6s ease-in" : "")};
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #f2ebeb;
    box-shadow: 0 0 10px white;
    border-radius: 5px;
    width: 240px;
    height: 1000px;
  }

  @keyframes move_right {
    0% {
      transform: translateX(110%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media not screen and (min-width: 60em) {
  }
  @media not screen and (min-width: 50em) {
    .left-content {
      width: 100%;
      margin-right: 0px;
    }
    .right-bar {
      display: none;
    }
  }
`;
