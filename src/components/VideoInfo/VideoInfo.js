import "../VideoInfo/VideoInfo.scss";
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

function VideoInfo({video}) {
  const { title, channel, timestamp, description, likes, views } = video;

  const date = new Date(timestamp).toLocaleDateString();

  return (
    <section className="info">
      <h1 className="info__title">{title}</h1>
      <section className="info__details">
        <div className="info__left">
          <p className="info__account">By {channel}</p>
          <p className="info__date">{date}</p>
        </div>
        <div className="info__right">
          <div className="info__views-wrapper">
          <img src={viewsIcon} className="info__views-icon" alt="viewcount" />
          <p className="info__views">{views}</p>
          </div>
          <div className="info__likes-wrapper">
          <img src={likesIcon} className="info__likes-icon" alt="likes" />
          <p className="info__likes">{likes}</p>
          </div>
        </div>
      </section>
      <section className="info__wrapper">
        <p className="info__description">{description}</p>
      </section>
    </section>
  );
}

export default VideoInfo;
