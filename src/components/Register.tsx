import { useState } from "react";

function RegistrationForm() {
  const [user_email, setEmail] = useState<string>("");
  const [user_password, setPassword] = useState<string>("");
  const [user_lastname, setLastName] = useState<string>("");
  const [user_firstname, setFirstName] = useState<string>("");

  const sendForm = (e: any) => {
    e.preventDefault();
    const formData = {
      user_firstname,
      user_lastname,
      user_email,
      user_password,
    };

    fetch("https://shohsulton.uz/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data.statusCode === 201) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.role);
          localStorage.setItem("username", user_firstname);
          alert(data.message);

          window.location.reload();
        } else {
          alert(data.message);
        }
      });
  };
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
              <form id="registrationForm" onSubmit={sendForm}>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="user_firstname"
                    name="user_firstname"
                    value={user_firstname}
                    className="form-control-input"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label className="label-control" htmlFor="user_firstname">
                    Имя
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="user_lastname"
                    name="user_lastname"
                    value={user_lastname}
                    className="form-control-input"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label className="label-control" htmlFor="user_lastname">
                    Фамилия
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input
                    required
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={user_email}
                    className="form-control-input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label-control" htmlFor="user_email">
                    Адрес электронной почты
                  </label>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group">
                  <input
                    required
                    type="password"
                    id="user_password"
                    value={user_password}
                    name="user_password"
                    className="form-control-input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label-control" htmlFor="user_password">
                    Пароль
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
