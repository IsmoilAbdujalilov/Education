import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    imgAlt: "Hollywood Sign on The Hill",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
    imgAlt: "Palm Springs Road",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
    imgAlt: "Los Angeles Skyscrapers",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
    imgAlt: "Skyscrapers",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp",
    imgAlt: "Skyscrapers",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    imgSrc: "https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp",
    imgAlt: "Skyscrapers",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

const CardList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://shohsulton.uz/api/cources/all")
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, []);

  console.log(courses);

  return (
    <div className="container">
      <div className="row py-5">
        {courses.map((el: any) => {
          return (
            <Link
              to={`/pages/courses/${el._id}`}
              className="col-12 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12"
            >
              <div className="card mb-4">
                <img
                  alt={"rasm"}
                  className="card-img-top"
                  src={`https://shohsulton.uz/api/images/${el.course_category?.category_image}`}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {el?.course_category?.category_name}
                  </h5>
                  <p className="card-text">
                    {el?.course_category?.category_description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
