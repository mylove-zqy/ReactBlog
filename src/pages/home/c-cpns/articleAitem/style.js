import styled from "styled-components";
export const HomeArticleItem = styled.div`
  transition: all 0.3s;
  /* transform:${props=>props.isShow?"translateX(0)":"translateX(-100%)"}; */
  animation:${props=>props.isShow?"home_animate .6s":""};
  cursor: pointer;
  font-size: 13px;
  transition: all 1s;
  @keyframes home_animate{
    0%{
      opacity:0;
      transform:translateX(-100%) rotate(-45deg)
    }
    100%{
      opacity:1;
      transform:translateX(0) rotate(0)
    }
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px #ccc;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .tag_item {
    padding: 0px 10px;
    border-radius: 6px;
    margin-right: 10px;
    color: white;
  }

  .title {
    margin: 0;
    color: ${(props) => props.homeFontColor};
  }
  padding: 10px 4px;
  .article_info {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    div {
      margin-right: 10px;
    }
  }
  .des {
    color: #777;
    font-variant: tabular-nums;
    font-size: 14px;
  }
  .view_all {
    margin-top: 10px;
    text-align: right;
    padding-right: 5px;
    color: #1890ff;
    font-size: 14px;
    span {
      cursor: pointer;
    }
  }
`;
