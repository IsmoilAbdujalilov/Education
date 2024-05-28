import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://shohsulton.uz/api/cources/all")
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, []);

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
