import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";
import SingleComment from "./components/SingleComment/SingleComment";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  const [video, setVideo] = useState(videoDetails[0]);

  const clickVideo = (videoId) => {
    const selectedVideo = videoDetails.find((video) => video.id === videoId);
    setVideo(selectedVideo);
  };

  const nextVideos = videos.filter((vid) => vid.id !== video.id);

  return (
    <>
      <Header />
      <Video video={video} />
      <div className="aside">
        <div className="not-aside">
          <VideoInfo video={video} />
          <Comments comments={video.comments} />
        </div>
        <NextVideos clickVideo={clickVideo} nextVideos={nextVideos} />
      </div>
    </>
  );
}

export default App;
