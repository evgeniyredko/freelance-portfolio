import "./style.css";

import vk from "./../../img/icons/vk.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import telegram from "./../../img/icons/telegram.svg";
import whatsApp from "./../../img/icons/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/dinesleif">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/Dinesleif">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://api.whatsapp.com/send?phone=77772315666">
                <img src={whatsApp} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Quintesence?tab=repositories">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 github.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
