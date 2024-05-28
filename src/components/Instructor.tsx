import InstractorImage from "../assets/images/instructor.jpg";

function InstructorSection() {
  return (
    <div id="instructor" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h3>
                Начните новую карьеру: пройдите профессиональную сертификацию на
                Coursera
              </h3>
              <p>
                Профессиональные сертификации предлагают гибкое онлайн-обучение,
                которое позволяет быстро освоить навыки, востребованные в
                развивающихся сферах.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              alt="alternative"
              src={InstractorImage}
              className="img-fluid clip-path"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
