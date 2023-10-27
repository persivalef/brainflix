import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchimage from "../../assets/Icons/search.svg";


function Header() {
  return (
    <article class="header">
      <img class="header__logo" src={logo} alt="brainflix-logo" />
      <section class="header__wrapper">
        <section class="header__search">
          <input type="text" class="header__search-bar" placeholder="Search" />
        </section>
        <img class="header__avatar" src={avatar} alt="avatar" />
      </section>
      <section class="header__upload">
        <input
          type="button"
          class="header__upload-button"
          value="UPLOAD"
        />
      </section>
      <img class="header__avatar-tablet" src={avatar} alt="avater" />
    </article>
  );
}
export default Header;
