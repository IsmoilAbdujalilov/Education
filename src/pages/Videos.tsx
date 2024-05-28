import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [videos, setVideos] = useState<any>([]);

  console.log(id);

  useEffect(() => {
    fetch(`https://shohsulton.uz/api/cources/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVideos([data.data]));
  }, []);

  console.log(videos);

  return (
    <section className="my-5 py-5">
      <div className="container">
        {videos.length > 0 &&
          videos.map((el: any) => {
            console.log(el);

            return (
              <div>
                <h3>Курс: {el.course_name}</h3>
                <p>Описание: {el.course_description}</p>
              </div>
            );
          })}
        <h3></h3>
      </div>
    </section>
  );
};

export default Videos;
