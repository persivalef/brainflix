import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchimage from "../../assets/Icons/search.svg";


function Header() {
  return (
    <article className="header">
      <img className="header__logo" src={logo} alt="brainflix-logo" />
      <section className="header__wrapper">
        <section className="header__search">
          <input type="text" className="header__search-bar" placeholder="Search" />
        </section>
        <img className="header__avatar" src={avatar} alt="avatar" />
      </section>
      <section className="header__upload">
        <input
          type="button"
          className="header__upload-button"
          value="UPLOAD"
        />
      </section>
      <img className="header__avatar-tablet" src={avatar} alt="avater" />
    </article>
  );
}
export default Header;
