const GOOGLE_API_KEY = "AIzaSyDrtNlgOoYe6lxC599R_lyhv7n0nxigYB4";

export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const YOUTUBE_VIDEO_WATCH_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";
export const YOUTUBERECOMMEND_VIDEOAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const OFFSET = 15;