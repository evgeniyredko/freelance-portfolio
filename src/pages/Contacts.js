const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Местоположение</h2>
            <p>Россия, Нижний Новгород</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+79051234567">+7 (906) 369-66-30</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+7 (777) 231-56-66</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">masquered@yandex.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
