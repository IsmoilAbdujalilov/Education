import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OneCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://shohsulton.uz/api/cources/${id}`)
      .then((res) => res.json())
      .then((data) => setCourses([data.data]));
  }, []);

  useEffect(() => {
    fetch("https://shohsulton.uz/api/wallets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const postUsersWallet = () => {
    fetch(`https://shohsulton.uz/api/users/register/course/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
     .then((res) => res.json())
      .then((data) => {
        navigate(`/pages/courses/video/${id}`);
        if (data.statusCode === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      }); 
  };

  return (
    <section className="py-5 my-5">
      {courses.length > 0 &&
        courses.map((el: any) => {
          return (
            <div className="container">
              <div className="d-flex justify-content-between py-5 shadow px-5">
                <div className="content">
                  <h1>{el?.course_name}</h1>
                  <p>{el?.course_description}</p>
                  <p>Продолжительность: {el?.course_duration}</p>
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${
                    el?.course_video?.split("=")[1]
                  }`}
                ></iframe>
              </div>

              <div className="d-flex justify-content-between gap-3">
                <div className="content shadow py-5 my-4 px-5 w-100 mr-5">
                  <h3>Чему вы научитесь на курсе.</h3>
                  <div className="row">
                    {el?.course_learns?.length > 0 &&
                      el?.course_learns?.map((el: string) => {
                        return (
                          <h3
                            style={{ fontSize: "18px" }}
                            className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12"
                          >
                            {el}
                          </h3>
                        );
                      })}
                  </div>
                </div>
                <div className="my-4 px-5 py-5 shadow w-100">
                  <h3>Стоимость курса</h3>
                  <p style={{ fontSize: "18px" }}>{el?.course_price}$</p>
                  <button
                    onClick={postUsersWallet}
                    className="btn btn-warning w-100"
                  >
                    Входить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default OneCourse;
