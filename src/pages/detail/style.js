import styled from "styled-components";

export const DetailWrapper = styled.div`
  padding: 10px 0px;
  .detail_header {
    background-color: #e1f0ff;
    padding: 10px 0;
    display: flex;
    color: #007988;
    font-size: 16px;
    .home {
      cursor: pointer;
      &:hover {
        color: ${(props) => props.homeFontColor};
      }
    }
  }
  .detail_all_info {
    padding: 0 10px;
    text-align: center;
    width: 100%;
  }
  .detail_title {
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.homeFontColor};
  }
  .detail_info {
    display: flex;
    padding: 20px 0;
    justify-content: center;
    div {
      padding: 0 10px;
    }
  }
  .detail_image {
    width: 100;
    img {
      width: 100%;
    }
  }
  .audio {
    width: 100;
    padding: 10px 0;
    video {
      width: 100%;
    }
    span {
      font-size: 23px;
    }
  }
  .markdown-body {
    margin-top: 30px; 
    padding: 0 10px;
  }
  .article_tags {
    background-color: #f6f8fa;
    width: 100%;
    padding: 10px;
    .tag_item {
      margin-left: 6px;
      padding: 4px 10px;
      height: 60px;
      border-radius: 7px;
    }
    .modifyTime {
      text-align:right;
      color: #ccc;
      font-size: 15px;
    }
  }

  .comment_input_wrap {
    padding: 15px;

    .parting-line {
      height: 4px;
      border: 0;
      background-color: #ddd;
      margin: 20px 0;
      background-image: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 4px,
        transparent 0,
        transparent 8px
      );
    }
    .dsy_tip {
      padding: 5px 0;
      text-align: center;
      font-size: 19px;
      font-weight: 600;
      color: rgb(153, 153, 153);
    }
  }
`;
