import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { Slider } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  MenuOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import { getImgUrl2, formatDate, getPlaySong } from "@/utils/format";
import {
  getCurrentSongAction,
  getSongListAction,
} from "../../store/actionCreators";
import { PlayerWrap } from "./style";

export default memo(function Music() {
  //props and state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [progress, SetProgress] = useState(0);
  const [lyric, setLyric] = useState("万水千山,你愿意陪我一起看吗");
  let [index, setIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const audioRef = useRef();
  //hooks
  const dispatch = useDispatch();
  const {
    homeFontColor,
    currentSong,
    songList,
    lyricList,
    currentLyricIndex,
  } = useSelector(
    (state) => ({
      homeFontColor: state.getIn(["home", "homeFontColor"]),
      currentSong: state.getIn(["life", "currentSong"]),
      currentSongIndex: state.getIn(["life", "currentSongIndex"]),
      songList: state.getIn(["life", "songList"]),
      currentLyricIndex: state.getIn(["life", "currentLyricIndex"]),
      lyricList: state.getIn(["life", "lyricList"]),
      // src: state.getIn(["life", "src"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getCurrentSongAction(487885426));
    dispatch(getSongListAction());
  }, [dispatch]);
  useEffect(() => {
    // console.log("重新获取了src");
    console.log(getPlaySong(currentSong.id));
    audioRef.current.src = getPlaySong(currentSong.id);
    // 播放称为暂停
    setIsPlaying(false);
    // 时间置0
    setCurrentTime(0);
  }, [currentSong]);
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;

  //播放 暂停
  const changeIsPlaying = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  //时间更新
  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    setCurrentTime(current * 1000);
    if (!isChanging) SetProgress((currentTime / duration) * 100);

    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (current * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      setLyric(lyricList[i - 1] && lyricList[i - 1].content);
    }
  };
  //音乐播放结束
  const HandleMusicEnd = (e) => {
    index = index + 1;
    if (index >= songList.length) {
      index = 0;
    }
    console.log(index);
    dispatch(getCurrentSongAction(songList[index].id));
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    // audioRef.current.play();
    setIndex(index);
  };
  //进度条改变
  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    // console.log(value);
    SetProgress(value);

    // audioRef.current.currentTime=currentTime/1000
  }, []);

  const slideAfterChange = useCallback(
    (value) => {
      // console.log(value);
      audioRef.current.currentTime = ((value / 100) * duration) / 1000;
      setCurrentTime((value * duration) / 100);
      setIsChanging(false);
      if (!isPlaying) {
        changeIsPlaying();
      }
    },
    [duration, isPlaying, changeIsPlaying]
  );

  //改变歌曲
  const changeSong = (item, index) => {
    dispatch(getCurrentSongAction(item.id));
    setCurrentTime(0);
    setIndex(index);
    console.log(index);
  };
  return (
    <PlayerWrap
      Length={songList.length}
      isHidden={isHidden}
      homeFontColor={homeFontColor}
      percentage={isPlaying ? "100" : "50"}
      fontSize={isPlaying ? "18px" : "25px"}
    >
      <div className="box">
        <div className="img">
          <div className="icon" onClick={() => changeIsPlaying()}>
            {isPlaying ? (
              <span>
                <PauseCircleOutlined />
              </span>
            ) : (
              <span>
                <PlayCircleOutlined />
              </span>
            )}
          </div>
          <img src={getImgUrl2(picUrl, 100)} alt="歌曲图片" />
        </div>
        <div className="right_info">
          {/* 歌曲姓名 歌手 */}
          <div className="song_info">
            <div className="song_name">{currentSong.name}</div>
            <div className="singer">——{singerName}</div>
          </div>
          {/* 歌词展示 */}
          <div className="lyric">
            {isPlaying ? lyric : "万水千山,你愿意陪我一起看吗"}
          </div>

          {/* 进度条 时间 播放列表等 */}
          <div className="operation">
            {/* 进度条 */}
            <div className="progress">
              <Slider
                onAfterChange={slideAfterChange}
                value={progress}
                onChange={sliderChange}
                defaultValue={0}
                tipFormatter={null}
              />
            </div>

            {/* 控制部分 现在只做歌单 */}
            <div className="control">
              {/*当前时间和歌曲总时长 */}
              <div className="duration">
                <span className="now"> {formatDate(currentTime, "mm:ss")}</span>
                <span className="all"> / {formatDate(duration, "mm:ss")}</span>
              </div>
              <div className="menu" onClick={() => setIsHidden(!isHidden)}>
                <MenuOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        src="http://music.163.com/song/media/outer/url?id=1403528956.mp3"
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={() => HandleMusicEnd()}
      ></audio>
      <div className="song_list">
        {songList.map((item, currentIndex) => {
          return (
            <div
              style={{
                borderLeft:
                  currentIndex === index ? "2px solid #ff5777" : "none",
              }}
              className="song_list_item"
              onClick={() => changeSong(item, currentIndex)}
              key={item.id}
            >
              <span className="name">
                <span>{currentIndex + 1}</span> <span>{item.name}</span>{" "}
              </span>
              <span className="singer">{item.ar[0].name}</span>
            </div>
          );
        })}
      </div>
    </PlayerWrap>
  );
});
