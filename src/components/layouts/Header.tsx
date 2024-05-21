import "swiper/css";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import Logo from "../../assets/images/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/images/details-slide-1.jpg";
import Slide2 from "../../assets/images/details-slide-2.jpg";
import Slide3 from "../../assets/images/details-slide-3.jpg";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister] = useState(false);
  const nextRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top bg-light">
        <a className="navbar-brand logo-image" href="index.html">
          <img src={Logo} alt="alternative" />
        </a>
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
            {isRegister ? (
              <li className="nav-item">
                <a className="nav-link page-scroll text-dark" href="#register">
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
                  Исмоил Абдужалилов
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="article-details.html">
                    <span className="item-text text-dark">Мой профайл</span>
                  </a>
                  <div className="dropdown-divider"></div>

                  <a
                    className="dropdown-item text-dark"
                    href="terms-conditions.html"
                  >
                    <span className="item-text">Выйти</span>
                  </a>
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
              <div className="text-container">
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
                navigation={{
                  nextEl: nextRef.current,
                  prevEl: ".swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <img className="img-fluid" src={Slide1} alt="alternative" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Slide2} alt="alternative" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Slide3} alt="alternative" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;
