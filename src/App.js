import logo from "./logo.svg";
import "./App.css";
import swal from "sweetalert";

function App() {
  const mostrarAlerta = () => {
    swal({
      title: "Hola !!!!",
      text: "Ejercicio alerta y React.js",
      icon: "info",
      button: "Aceptar",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="boton" onClick={() => mostrarAlerta()}>
          Mostrar Alerta
        </button>
      </header>
    </div>
  );
}

export default App;
