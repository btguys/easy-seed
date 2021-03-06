import { PT_SITE } from './config.yaml';
const $ = jQuery
const TORRENT_INFO = {
  title: '', // 标题
  subtitle: '', // 副标题
  description: '', // 描述
  year: '', // 电影年份
  category: '', // 电影、电视、音乐等
  videoType: '', // bluray remux encodes web-dl
  source: '', // 视频来源
  videoCodes: '', // 视频编码
  audioCodes: '', // 音频编码
  resolution: '', // 分辨率
  area: '', // 地区
  doubanUrl: '', // 豆瓣地址
  doubanInfo: '', // 豆瓣简介
  imdbUrl: '', // imdb地址
  tags: '', // 标签 diy 中字 国配等
  mediaInfo: '',
  bdinfo: '',
  screenshots: [],
  movieAkaName: '', // 别名一般为电影英文名称
  movieName: '', // imdb电影原始名称 一般为拼音
  sourceSite: '', // 种子来源站点简称
};
// 快速检索
const SEARCH_SITE_MAP = {
  HDB: 'https://hdbits.org/browse.php?search={imdbid}&sort=size&h=8&d=DESC',
  PTP: 'https://passthepopcorn.me/torrents.php?action=advanced&searchstr={imdbid}',
  MTeam: 'https://pt.m-team.cc/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search={imdbid}&search_area={searchArea}&search_mode=0',
  TTG: 'https://totheglory.im/browse.php?search_field={imdbid}&c=M&sort=5&type=desc',
  CHD: 'https://chdbits.co/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search={imdbid}&search_area=4&search_mode=0',
  BHD: 'https://beyond-hd.me/torrents/all?doSearch=Search&imdb={imdbid}&sorting=size&direction=desc',
  BLU: 'https://blutopia.xyz/torrents?imdb={imdbid}',
  AHD: 'https://awesome-hd.me/torrents.php?searchstr={imdbid}',
  SSD: 'https://springsunday.net/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search={imdbid}&search_area={searchArea}&search_mode=0',
};
const API_KEY = '054022eaeae0b00e0fc068c0c0a2102a';
const DOUBAN_API_URL = 'https://frodo.douban.com/api/v2';
const DOUBAN_SEARCH_API = 'https://omit.mkrobot.org/movie/infos';
const PT_GEN_API = 'https://media.pttool.workers.dev';
const getSiteName = (host) => {
  let siteName = '';
  try {
    Object.keys(PT_SITE).forEach(key => {
      const hostName = PT_SITE[key].host;
      if (hostName && host === hostName) {
        siteName = key;
      }
    });
    return siteName;
  } catch (error) {
    if (error.message !== 'end loop') {
      console.log(error);
    }
  }
};
const CURRENT_SITE_NAME = getSiteName(location.host);
const CURRENT_SITE_INFO = PT_SITE[CURRENT_SITE_NAME];

export {
  TORRENT_INFO,
  API_KEY,
  DOUBAN_API_URL,
  DOUBAN_SEARCH_API,
  PT_GEN_API,
  CURRENT_SITE_NAME,
  CURRENT_SITE_INFO,
  SEARCH_SITE_MAP,
  PT_SITE,
}
;
