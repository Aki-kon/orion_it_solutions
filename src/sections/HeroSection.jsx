import "../css/hero.css";
import NavBar from "../components/NavBar";
const HeroSection = () => {
  return (
    <>
      <div className="container-fluid bg-img-hero p-0">
        <NavBar></NavBar>
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
          <div
            id="presentation-container"
            className="w-50 d-flex flex-column align-items-center gap-4"
          >
            <h1 className="welcome-mesagge inter-bolder text-center custom-title-sm">
              Bienvenidos a Orion IT Solutions
            </h1>
            <p className="text-center presentation-text dm-sans-bold fs-1">
              Nos encargamos de resolver cualquier tipo de problema relacionado
              al mundo IT
            </p>
            <a
              className="btn btn-dark fs-4 dm-sans-italic p-3 mb-3"
              href="#contact"
            >
              Explora tus opciones
            </a>
            <img id="arrow-hero" src="../assets/img/arrow_down.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
