import InstractorImage from "../assets/images/instructor.jpg";

function InstructorSection() {
  return (
    <div id="instructor" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt="alternative"
              src={InstractorImage}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Я Гарри, твой тренер</h2>
              <p>
                Всем привет! Я Гарри, и я буду вашим главным инструктором. во
                время курса обучения SEO. у меня более 10 лет Опыт работы в SEO,
                и я очень увлечен этой областью. Регистрируйтесь на курс и
                давайте встретимся.
              </p>
              <p>
                Обучение студентов лучшим методам SEO – это нечто. Я люблю
                заниматься работой на полный рабочий день
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
