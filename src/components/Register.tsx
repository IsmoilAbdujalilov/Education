function RegistrationForm() {
  return (
    <div id="register" className="form-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Зарегистрируйтесь, используя форму</h2>
              <p>
                Зарегистрироваться на курс легко, достаточно заполнить форму и
                нажмите «Отправить». Тогда вы будете зарегистрированы в одном из
                лучших Курсы обучения SEO в отрасли
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>Ваша информация</strong> требуется для завершения
                    Регистрация
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>С нами безопасно</strong> и не будет использоваться
                    для маркетинг
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>Вы получите</strong> электронное письмо с
                    подтверждением через меньшее время чем 24 часа
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-container">
              <form
                id="registrationForm"
                onSubmit={(e) => {
                  e.preventDefault(); /* Add form submission logic here */
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="rname"
                    name="rname"
                    required
                  />
                  <label className="label-control" htmlFor="rname">
                    Полное имя
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="remail"
                    name="remail"
                    required
                  />
                  <label className="label-control" htmlFor="remail">
                    Адрес электронной почты
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="rphone"
                    name="rphone"
                    required
                  />
                  <label className="label-control" htmlFor="rphone">
                    Номер телефона
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="rterms"
                    value="Agreed-to-Terms"
                    name="rterms"
                    required
                  />
                  <label htmlFor="rterms">
                    Я прочитал и согласен с написанным Корсо
                    <a href="privacy-policy.html">
                      политика конфиденциальности
                    </a>{" "}
                    и<a href="terms-conditions.html">Условия использования</a>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    РЕГИСТР
                  </button>
                </div>
                <div className="form-message">
                  <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
