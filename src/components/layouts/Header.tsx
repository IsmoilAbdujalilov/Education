import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { CarouselImage1 } from "../../images";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import { Link, NavLink } from "react-router-dom";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user_email, setUserEmail] = useState<string>("");
  const [basicModal, setBasicModal] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [user_password, setUserPassword] = useState<string>("");
  const [user_lastname, setUserLastName] = useState<string>("");
  const [user_firstname, setUserFirstName] = useState<string>("");

  const toggleOpen = () => setBasicModal(!basicModal);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (token) {
      setIsRegister(false);
    } else {
      setIsRegister(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("https://shohsulton.uz/api/users/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: any) => {
        setUserFirstName(data?.data?.user_firstname);
        setUserLastName(data?.data?.user_lastname);
        setUserEmail(data?.data?.user_email);
      });
  }, []);

  const sendForm = (e: any) => {
    e.preventDefault();

    const formData = {
      user_firstname,
      user_lastname,
      user_email,
      user_password,
    };

    fetch("https://shohsulton.uz/api/auth/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          localStorage.setItem("username", user_firstname);
          alert(data.message);
          window.location.reload();
        } else {
          alert(data.message);
        }
      });
  };

  const logoutFunction = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const sendWallet = () => {
    fetch("https://shohsulton.uz/api/wallets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          toggleMenu();
        }
      });
  };

  const [amonts, setAmonts] = useState<any>({});

  useEffect(() => {
    fetch("https://shohsulton.uz/api/wallets/my", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAmonts(data.data));
  }, []);

  


  return (
    <>
      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Profile</MDBModalTitle>
              <MDBBtn
                color="none"
                onClick={toggleOpen}
                className="btn btn-close"
              >
                X
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBTabs className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab1")}
                    active={basicActive === "tab1"}
                  >
                    Form
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    Wallets
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane open={basicActive === "tab1"}>
                  <form onSubmit={sendForm}>
                    <label htmlFor="user_firstname" className="w-100">
                      Имя
                      <input
                        type="text"
                        id="user_firstname"
                        value={user_firstname}
                        className="form-control w-100 mt-2"
                        onChange={(e) => setUserFirstName(e.target.value)}
                      />
                    </label>
                    <label htmlFor="user_lastname" className="w-100">
                      Фамилия
                      <input
                        type="text"
                        id="user_lastname"
                        value={user_lastname}
                        className="form-control w-100 mt-2"
                        onChange={(e) => setUserLastName(e.target.value)}
                      />
                    </label>
                    <label htmlFor="user_email" className="w-100">
                      Электронная почта
                      <input
                        type="text"
                        id="user_email"
                        value={user_email}
                        className="form-control w-100 my-2"
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </label>
                    <label htmlFor="user_password" className="w-100">
                      Пароль
                      <input
                        type="password"
                        id="user_password"
                        value={user_password}
                        className="form-control w-100 my-2"
                        onChange={(e) => setUserPassword(e.target.value)}
                      />
                    </label>
                    <button className="btn btn-warning w-100">
                      Отправить данные
                    </button>
                  </form>
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === "tab2"}>
                  <h3>Amonts: {amonts?.wallet_amount}</h3>
                  <button
                    onClick={sendWallet}
                    type="button"
                    className="btn btn-warning w-100"
                  >
                    Отправить кошелек
                  </button>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top bg-light">
        <Link
          to="/"
          className="navbar-brand logo-image"
          style={{
            textDecoration: "none",
            color: "#ffbd50",
            fontStyle: "italic",
            fontSize: "28px",
          }}
        >
          Brain Group
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {isOpen ? (
            <span className="navbar-toggler-awesome fas fa-times"></span>
          ) : (
            <span className="navbar-toggler-awesome fas fa-bars"></span>
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll text-dark" href="#description">
                ПОДРОБНОСТИ
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll text-dark" href="#contact">
                КОНТАКТ
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pages/courses"
                className="nav-link page-scroll text-dark"
              >
                КУРСЫ
              </NavLink>
            </li>
            {isRegister ? (
              <li className="nav-item">
                <a className="nav-link page-scroll text-dark" href="#contact">
                  РЕГИСТР <span className="sr-only">(current)</span>
                </a>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle page-scroll text-dark"
                  href="#date"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {username}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button onClick={toggleOpen} className="dropdown-item">
                    <span className="item-text text-dark">Мой профайл</span>
                  </button>
                  <div className="dropdown-divider"></div>

                  <button
                    onClick={() => logoutFunction()}
                    type="button"
                    className="dropdown-item text-dark btn"
                  >
                    <span className="item-text">Выйти</span>
                  </button>
                </div>
              </li>
            )}
          </ul>

          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </nav>

      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container text">
                <h1>Учитесь у нас в своей области</h1>

                <a className="btn-solid-lg page-scroll" href="#register">
                  РЕГИСТР
                </a>
                <a className="btn-outline-lg page-scroll" href="#contact">
                  КОНТАКТ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-container">
          <div className="slider-container swiper-wrapper">
            <div className="swiper-container">
              <Swiper
                loop
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: false,
                }}
                modules={[Autoplay]}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    className="responsive-image"
                    src={CarouselImage1}
                    alt="alternative"
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img
                    src={CarouselImage2}
                    alt="alternative "
                    className="responsive-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={CarouselImage3}
                    alt="alternative"
                    className="responsive-image"
                  />
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;
