import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  currentSong: {},
  currentIndex: 0, //哪一句歌词
  lyricList: [], //歌词列表
  songList: [], //歌曲列表id
  currentSongIndex: 0, //当前歌曲的index

});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_SONG_LIST:
      return state.set("songList", action.songList);

    default:
      return state;
  }
}
export default reducer;
