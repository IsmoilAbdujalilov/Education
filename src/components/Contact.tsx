function Contact() {
  return (
    <div id="contact" className="form-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Контактная информация</h2>
              <p>
                По вопросам регистрации обращайтесь по контактам подробности
                ниже. По любым вопросам используйте форму.
              </p>
              <h3>Расположение главного офиса</h3>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="media-body">Belarussiya, Minsk</div>
                </li>
                <li className="media">
                  <i className="fas fa-mobile-alt"></i>
                  <div className="media-body">
                    +375 25 686 6245, &nbsp;&nbsp;
                  </div>
                </li>
                {/* <li className="media">
                  <i className="fas fa-envelope"></i>
                  <div className="media-body">
                    <a className="light-gray" href="mailto:contact@zigo.com">
                      example@zigo.com
                    </a>{" "}
                    <i className="fas fa-globe"></i>
                    <a className="light-gray" href="#your-link">
                      www.example.com
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <form id="contactForm" data-toggle="validator" data-focus="false">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-input"
                  id="cname"
                  required
                />
                <label className="label-control" htmlFor="cname">
                  Имя
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-input"
                  id="cemail"
                  required
                />
                <label className="label-control" htmlFor="cemail">
                  Электронная почта
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control-textarea"
                  id="cmessage"
                  required
                ></textarea>
                <label className="label-control" htmlFor="cmessage">
                  Ваше сообщение
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="cterms"
                  value="Agreed-to-Terms"
                  required
                />
                Я прочитал и согласен с изложенным Корсо{" "}
                <a href="privacy-policy.html">политика конфиденциальности</a> и{" "}
                и <a href="terms-conditions.html">Условия Условия</a>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ
                </button>
              </div>
              <div className="form-message">
                <div id="cmsgSubmit" className="h3 text-center hidden"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
