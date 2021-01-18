import * as actionTypes from "./constants";

import { getSongDetail, getSongLyric, getAllSongs } from "@/network/life";
import { parseLyric } from "@/utils/format.js";
//获取歌曲详情
export const getCurrentSongAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.data.songs[0]));
      //获取歌词
      //获取歌曲src
      // dispatch(changeSongSrcAction(getPlaySong(res.data.songs[0].id)));
    });
    getSongLyric(ids).then((res) => {
      const lyric = res.data.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricList(lyricList));
    });
  };
};
const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
};
//改变歌词列表
const changeLyricList = (lyricList) => {
  return {
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList,
  };
};

//改变是哪一个歌词
export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentLyricIndex,
});

//改变歌单
export const getSongListAction = () => {
  return (dispatch) => {
    getAllSongs().then((res) => {
      dispatch(changeSongListAction(res.data.data.songs));
    });
  };
};
const changeSongListAction = (songList) => {
  return {
    type: actionTypes.CHANGE_SONG_LIST,
    songList,
  };
};
