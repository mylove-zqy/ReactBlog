import styled from "styled-components";

export const LoginPanelWrap = styled.div`
  position: fixed;
  padding: 20px 40px;
  width: 400px;
  border: 1px solid #ccc;
  background-color: rgba(0, 0, 0, 0.3);
  left: 50%;
  top: 50%;
  z-index: 99999;
  box-shadow:0 0 10px white;
  border-radius:5px;
  transition: transform 0.3s;
  transform-origin: 10px 10px;
  transform: ${(props) => (props.showLogin ? "scale(1)" : "scale(0)")}
    translate(-50%, -50%);
  .email {
    display: flex;
  }
  .top {
    text-align: center;
    color:white;
    font-size:20px;
    font-weight:600;
    margin-bottom:10px;
  }

  .input {
  }
  .operation {
    text-align: right;
  }
  @media not screen and (min-width: 50em) {
    width: 94%;
    padding: 20px 20px;
  }
`;
