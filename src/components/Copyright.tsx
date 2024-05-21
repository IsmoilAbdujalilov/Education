function Copyright() {
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-small">
              Авторские права © {new Date().getFullYear()}{" "}
              <a href="https://inovatik.com">Иноватик</a> - Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
