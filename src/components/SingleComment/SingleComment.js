import "./SingleComment.scss";

function SingleComment({ comments }) {
  const { name, comment, timestamp } = comments;

  const date = new Date(timestamp).toLocaleDateString();

  return (
    <section className="single-comment">
      <div className="single-comment__avatar-wrapper">
        <div className="single-comment__avatar"></div>
      </div>
      <section className="single-comment__form-wrapper">
        <div className="single-comment__form">
          <div className="single-comment__name-date">
          <p className="single-comment__name">{name}</p>
          <p className="single-comment__date">{date}</p>
          </div>
          <p className="single-comment__text">{comment}</p>
        </div>
      </section>
    </section>
  );
}

export default SingleComment;
