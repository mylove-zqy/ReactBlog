import styled from "styled-components";

export const LoadingWrapper = styled.div`
z-index:9999;
  /* 撑满全屏 */
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: #161b29;

  .title{
    color:white;
  }
  .desc{
    color:#ccc;
  }

  @media not screen and (min-width: 45em) {

  }
`;
