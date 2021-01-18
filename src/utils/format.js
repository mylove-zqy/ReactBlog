export const handleTimeStamp = (nS) => {
  // console.log(time);
  if (nS) {
    return new Date(parseInt(nS)).toLocaleString();
  }
  return "00/00/00";
};

export const handleTimeString = (time) => {
  if (!time) {
    return "00-00-00  00:00:))";
  }
  return time.substr(0, 10) + "  " + time.substr(11, 8);
};

export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return (Math.floor(count / 1000) / 10).toFixed(2) + "万";
  } else {
    return (Math.floor(count / 10000000) / 10).toFixed(2) + "亿";
  }
}

export function getImgUrl(url) {
  return url + "?param=100x100";
}
export function getImgUrl2(url, size) {
  return url + `?param=${size}y${size}`;
}

export function formatTime(time) {}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString) {
  const lyrics = [];
  const lineLyric = lyricString.split("\n");
  for (let line of lineLyric) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      let lineObj = {
        time,
        content,
      };
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}
