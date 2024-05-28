import { useEffect, useState } from "react";

function KeyTakeaways() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://209.38.34.241:8080/api/categories/all")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  console.log(data);

  return (
    <div className="cards">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Ключевые выводы</h2>
            <p className="p-heading">
              Вот основные темы, которые будут рассмотрены на тренинге по Brain Group.
              курс. Они охватывают все основы Brain Group и даже некоторые продвинутые
              методы, которые помогут вам на этом пути
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {data.length > 0 &&
              data.map((el: any) => {
                return (
                  el.category_isactive && (
                    <div className="card">
                      <div className="card-image" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                          alt="rasm"
                          style={{height: "75px"}}
                          src={`http://209.38.34.241:8080/api/images/${el.category_image}`}
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{el.category_name}</h4>
                        {/* <p>
                          Поймите, где сейчас находится ваш сайт запросы в
                          поисковых системах
                        </p> */}
                      </div>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyTakeaways;
