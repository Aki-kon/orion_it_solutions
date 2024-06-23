import "../css/contact.css";
import NavBar from "../components/NavBar";
import TestComponent from "./TestComponent";
import useForm from "../hooks/useForm";
const ContactSection = () => {
  const { values, Change } = useForm({
    username: "",
    email: "",
    description: "",
  });
  const { username, email, description } = values;
  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <>
      <div id="contact" className="bg-contact">
        <NavBar></NavBar>
        <div className="d-none d-lg-block ">
          <h1 id="contact-title" className="p-5 w-75 inter-bold">
            Hablemos sobre como solucionar tus problemas IT
          </h1>
          <div className="container-fluid d-flex justify-content-center">
            <TestComponent></TestComponent>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <TestComponent></TestComponent>
          </div>
          <div
            id="contact-info"
            className="dm-sans-bold d-flex flex-column align-items-center "
          >
            <h4 className="fs-1 text-center inter-bold">
              Puedes comunicarte tambien por estos medios
            </h4>
            <ul>
              <li className="item-contact">
                <span className="p-4 ">
                  <i className="bi bi-telephone-inbound-fill"></i>
                </span>
                <span className="text-white">664-111-22222</span>
              </li>
              <li className="item-contact">
                <span className="p-4">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <span className="text-white">orionit@gmail.com</span>
              </li>
              <li className="item-contact">
                <span className="p-4">
                  <i className="bi bi-instagram"></i>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/orionit.solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OrionIT Solutions
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div id="contact-form" className="pt-3">
            <form
              action=""
              className="d-flex flex-column gap-3 px-5"
              onSubmit={() => SubmitForm(event)}
            >
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                className="py-2 rounded fs-5 "
                name="username"
                value={username}
                onChange={() => Change(event.target)}
              ></input>
              <input
                type="email"
                placeholder="Escribe tu correo electronico"
                className="py-2 rounded fs-5 "
                name="email"
                value={email}
                onChange={() => Change(event.target)}
              ></input>
              <textarea
                className="rounded fs-5"
                name="description"
                id=""
                rows="3"
                value={description}
                onChange={() => Change(event.target)}
              ></textarea>
              <button type="submit" className="btn btn-warning">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="contact-small d-lg-none ">
          <div>
            <h1
              id="contact-title-small"
              className="px-4 inter-bold text-center "
            >
              Hablemos sobre como solucionar tus problemas IT
            </h1>

            <div className="pt-3">
              <form action="" className="d-flex flex-column gap-3 px-5 ">
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="py-2 rounded  input-small"
                ></input>
                <input
                  type="email"
                  placeholder="Escribe tu correo electronico"
                  className="py-2 rounded  input-small "
                ></input>
                <div className="">
                  <select className="form-select input-small" name="" id="">
                    <option value="">Categoria</option>
                    <option value="">Remoto</option>
                    <option value="">Presencial</option>
                    <option value="">Servicio Personalizado</option>
                  </select>
                </div>
                <textarea
                  className="rounded input-small"
                  name=""
                  id=""
                  rows="2"
                  value="Describe tu petición"
                ></textarea>
                <button type="submit" className="btn btn-warning send-small">
                  Enviar
                </button>
              </form>
            </div>
            <div className="contact-small-info pt-5">
              <ul className="d-flex flex-column list-contact">
                <li className="">
                  <span className="border border-4 p-4 rounded icon-small">
                    <i className="bi bi-telephone-inbound-fill fs-1"></i>
                  </span>
                  <span className="fs-3 text-white dm-sans-bold">
                    664-135-1289
                  </span>
                </li>
                <li>
                  <span className="border border-4 p-4 rounded icon-small">
                    <i className="bi bi-instagram fs-1"></i>
                  </span>
                  <span className="fs-5 text-white dm-sans-bold">
                    <a
                      href="https://www.instagram.com/orionit.solutions/"
                      target="_blank"
                    >
                      Orionit Solutions
                    </a>
                  </span>
                </li>
                <li>
                  <span className="border border-4 p-4 rounded icon-small">
                    <i className="bi bi-envelope-at-fill fs-1"></i>
                  </span>
                  <span className="fs-3 text-white dm-sans-bold">...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
