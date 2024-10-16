import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Евгений</em>
          </strong>
          <br />я frontend-разработчик
        </h1>
        <div className="header__text">
          <p>с желанием обучаться и творить.</p>
        </div>
        <a href="#!" className="btn">
          Скачать резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
