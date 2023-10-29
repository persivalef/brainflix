import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

function App() {

  const [video, setVideo] = useState(videoDetails[0])

  const clickVideo = (videoId) => {
    const selectedVideo = videoDetails.find(video => video.id === videoId); 
    setVideo(selectedVideo);
  }
  return (
    <>
      <Header />
      <Video />
    </>
  );
}

export default App;
