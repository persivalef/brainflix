import "./NextVideos.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

function NextVideos({ nextVideos, clickVideo }) {
  return (
    <section className="next-video-list">
      <h2 className="next-video-list__title">NEXT VIDEOS</h2>
      {nextVideos.map((video) => (
        <NextVideoItem clickVideo={clickVideo} video={video} />
      ))}
    </section>
  );
}

export default NextVideos;
