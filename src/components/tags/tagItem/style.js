import styled from "styled-components";

export const TagItemWrap = styled.div`
  cursor: pointer;
  z-index: 999;
  margin-left: 10px;
  margin-top: 4px;
  position: relative;
  &:hover {
    transition: all 0.4s;
    .tag_name {
      border-color: white;
      background-color: ${(props) => props.color};
      color: white;
    }
    .triangle {
      background-color: ${(props) => props.color};
      color: white;
      border-color: white;
    }
  }
  .tag_name {
  

    transition: all 0.4s;
    right: 0;
    color:${props=>props.fontColor};
    border: 1px ${(props) => props.color} solid;
    padding: 0 6px;
    font-size: 16px;
  }
  .triangle {
    transition: all 0.4s;
    top: 50%;
    z-index: 9;
    left: -3px;
    background-color: white;
    width: 6px;
    height: 6px;
    border-width: 0 0 1px 1px;
    z-index: 9;
    border-style: solid;
    border-color: black;
    background-color: ${(props) => props.ThemeColor?props.ThemeColor:""};
    transform: rotate(45deg) translate(-50%, -50%);
    position: absolute;
    border-color: ${(props) => props.color};
  }
`;
