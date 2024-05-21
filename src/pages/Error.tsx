import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section>
      <div className="not-found">
        <div className="not-found-text">
          <h1>Страница не найдена</h1>
          <p>
            Кажется, мы не можем найти страницу, которую вы ищете. Пожалуйста,
            проверьте URL для любых опечаток.
          </p>

          <ul className="menu">
            <li>
              <Link to="/">Вернуться на домашнюю страницу</Link>
            </li>
            <li>
              <Link to="/">Контакт</Link>
            </li>
          </ul>
        </div>
        <div>
          <img
            alt="error-image"
            className="not-found-image"
            src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
          />
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
