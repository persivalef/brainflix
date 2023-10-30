import avatar from "../../assets/images/Mohan-muruge.jpg";
import SingleComment from "../SingleComment/SingleComment";
import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="comments">
      <p className="comments__amount">{comments.length} Comments</p>
      <section className="comments__new-comment">
        <div className="comments__avatar-wrapper">
          <img src={avatar} className="comments__avatar" alt="" />
        </div>
        <section className="comments__form-wrapper">
          <div className="comments__form">
            <label className="comments__title">JOIN THE CONVERSATION</label>
            <input
              className="comments__input"
              type="text"
              placeholder="Add a new comment"
            />
          </div>
          <div className="comments__submit">
            <input
              className="comments__submit-button"
              type="submit"
              value="COMMENT"
            />
          </div>
        </section>
      </section>
      {comments.map((comment) => (
        <SingleComment comments={comment} />
      ))}
    </section>
  );
}

export default Comments;
