import "../NextVideoItem/NextVideoItem.scss";

function NextVideoItem({ video, clickVideo }) {
  const { title, channel, image, id } = video;

  return (
    <section className="next-videos">
      <section className="next-videos__videos" onClick={() => clickVideo(id)}>
        <img src={image} className="next-videos__thumbnail" />
        <div className="next-videos__wrapper">
          <h2 className="next-videos__video-title">{title}</h2>
          <p className="next-videos__account">{channel}</p>
        </div>
      </section>
    </section>
  );
}

export default NextVideoItem;
