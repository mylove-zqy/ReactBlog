import styled from "styled-components";

export const BackTopWrap = styled.div`
  z-index: 99999;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  position: fixed;
  right: 1%;
  top: 0;
  /* transform:translateY(-100px); */
  transform: ${(props) =>
    props.scrollTop > 300 ? "translateY(-20%)" : "translateY(-120%)"};
  .mobile {
    display: none;
  }
  img {
    animation: upAndDown 1.5s infinite;
    /* transform:scale(0.8) */
  }
  @keyframes upAndDown {
    0% {
      transform: translateY(0px) scale(0.8);
    }
    50% {
      transform: translateY(10px) scale(0.8);
    }
    100% {
      transform: translateY(0px) scale(0.8);
    }
  }
  @media not screen and (min-width: 50em) {
    transform: none;
    position: fixed;
    right: 50px;
    top: 85%;
    img {
      display: none;
    }
    .mobile {
      display: ${(props) => (props.scrollTop > 300 ? "block" : "none")};
    }
  }
`;
