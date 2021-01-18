import axios from "axios";
import request from './index'
//获取歌曲详情
export function getSongDetail(ids) {
  return axios.get(`http://47.98.47.212:8001/song/detail?ids=${ids}`);
}
//获取歌词
// http://47.98.47.212:8001/lyric?id=33894312
export function getSongLyric(id) {
  return axios.get(`http://47.98.47.212:8001/lyric?id=${id}`);
}

//获取全部的歌曲
export function getAllSongs(){
  return request({
    url:'/music/get_song_list'
  })
}