import styled from "styled-components";

export const CommentItemWrap = styled.div`
  &:hover {
    .avatar {
      transition:all .5s;
      transform: rotate(360deg);
    }
  }
  .avatar{
    transition:all .5s;
  }

  .upPerson {
    color: #ff6137;
    border: 1px solid #ff6137;
    font-size: 10px;
    padding: 1px 2px;
    margin-right: 2px;
    border-radius: 2px;
    font-weight: 600;
  }
.comment_father{
  color:blue;
}

`;
