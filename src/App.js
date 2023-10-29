import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import VideoInfo from "./components/VideoInfo/VideoInfo";

function App() {

  const [video, setVideo] = useState(videoDetails[0]);

  const clickVideo = (videoId) => {
    const selectedVideo = videoDetails.find(video => video.id === videoId); 
    setVideo(selectedVideo);
  };

  const nextVideos = videos.filter(video => video.id !== setVideo);

  return (
    <>
      <Header />
      <Video video ={video}/>
      <VideoInfo video = {video}/>
    </>
  );
}

export default App;
