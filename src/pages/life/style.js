import styled from 'styled-components'


export const LifeWrap=styled.div`
background-color:white;
padding:5px;
.music{
  transition:all .4s;
  background: url(${props=>props.fontColor==="#616161"?"https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/music_back1.png":"https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/music_back2.jpg"}) no-repeat 50%;
  background-size:cover;
  p{
  color:${props=>props.fontColor==="#616161"?"deeppink":'white'};
    font-size:17px;
    font-weight:bold;
    font-family:"楷体";
  }
}
`