function CourseVideoPresentation() {
  return (
    <div className="basic-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Видеопрезентация курса</h2>

            <div className="image-container">
              <div className="video-wrapper">
                <iframe
                  style={{ width: "100%", height: "500px" }}
                  allowFullScreen
                  className="popup-youtube"
                  src="https://www.youtube.com/embed/M5QY2_8704o?si=ZOY9M3kZqQCCJvjY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseVideoPresentation;
