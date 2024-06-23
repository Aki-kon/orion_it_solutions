import "../css/about.css";
const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="container-fluid bg-about-us">
        <div className="container-fluid medium image-container d-none d-lg-flex justify-content-center align-items-center">
          <h1 id="about-title" className=" text-center w-75">
            Nuestra misión es ofrecer un servicio de alta calidad en el que
            puedas confiar.
          </h1>
        </div>
        <div className="container d-none d-lg-block ">
          <div className="row">
            <div className="col-6 d-flex flex-column gap-3 mt-5">
              <h3 id="subtitle-about" className="text-center fs-1 w-75 ">
                Estamos conformados por un equipo lleno de pasión por su trabajo
              </h3>
              <p id="about-paragraph" className="px-3 w-75 fs-5 dm-sans-bold">
                Nos comprometemos a siempre buscar el mejor resultado que
                satisfaga las necesidades de nuestros clientes y que cumpla con
                nuestros estándares.
              </p>
            </div>
            <div className="col-6 mt-4 d-flex flex-column align-items-center">
              <div className="row gap-2">
                <div className="col-6 card mb-3 d-flex flex-column justify-content-center align-items-center">
                  <p className="fs-1 dm-sans-bold">Alexis</p>
                  <span>
                    <img src="../assets/img/Alexis.png" alt="" />
                  </span>
                </div>
                <div className="col-6 card d-flex flex-column justify-content-center align-items-center">
                  <p className="fs-1 dm-sans-bold">Angel</p>
                  <span>
                    <img src="../assets/img/Angel.png" alt="" />
                  </span>
                </div>
              </div>
              <div className="row gap-2">
                <div className="col-6 card d-flex flex-column justify-content-center align-items-center">
                  <p className="fs-1 dm-sans-bold">Marco</p>
                  <span>
                    <img src="../assets/img/Marco.png" alt="" />
                  </span>
                </div>
                <div className="col-6 card d-flex flex-column justify-content-center align-items-center">
                  <p className="fs-1 dm-sans-bold">Cesar</p>
                  <span>
                    <img src="../assets/img/Cesar.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-small d-lg-none">
          <h1 id="about-title-sm" className="text-center inter-bolder">
            Estamos conformados por un equipo lleno de pasión por su trabajo
          </h1>
          <p id="about-paragraph-sm" className="px-3 w-100 dm-sans-italic ">
            Nos comprometemos a siempre buscar el mejor resultado que satisfaga
            las necesidades de nuestros clientes y que cumpla con nuestros
            estándares.
          </p>
          <div className="about-img-small"></div>
          <div className="row gap-2 d-flex justify-content-center py-4">
            <div className="col-sm-6 card-small d-flex flex-column  align-items-center">
              <p className="fs-1 dm-sans-bold">Alexis</p>
              <span>
                <img src="../assets/img/Alexis.png" alt="" />
              </span>
            </div>
            <div className="col-sm-6 card-small d-flex flex-column  align-items-center">
              <p className="fs-1 dm-sans-bold">Angel</p>
              <span>
                <img src="../assets/img/Angel.png" alt="" />
              </span>
            </div>
            <div className="col-sm-6 card-small d-flex flex-column  align-items-center">
              <p className="fs-1 dm-sans-bold">Marco</p>
              <span>
                <img src="../assets/img/Marco.png" alt="" />
              </span>
            </div>
            <div className="col-sm-6 card-small d-flex flex-column  align-items-center">
              <p className="fs-1 dm-sans-bold">Cesar</p>
              <span>
                <img src="../assets/img/Cesar.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
