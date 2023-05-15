import "./App.css";
import { useEffect, useState } from "react";

//Componentes
import { Personaje } from "./components/Personaje";
import ModalDetails from "./components/ModalDetails";
import Navbar from "./components/Navbar";
import Personajes from "./components/Personajes";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personaje, setPersonaje] = useState({});
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pagina, setPagina] = useState(1);
  const URL = `https://rickandmortyapi.com/api/character/?page=${pagina}`;

  const getApi = () => {
    fetch(URL)
      .then((respose) => respose.json())
      .then((data) => setPersonajes(data.results));
  };

  useEffect(() => {
    getApi();
    const interval = setInterval(() => {
      setIsLoading(true);
    }, 300);

    return () => clearInterval(interval);
  }, [pagina]);

  

  const filterItem = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(name)
  );
  // console.log(prueba)

  const getData = (id) => {
    const result = personajes.filter((personaje) => personaje.id === id);
    setPersonaje(result[0]);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <Navbar setName={setName} />
      {isModalOpen ? (
        <ModalDetails personaje={personaje} setIsModalOpen={setIsModalOpen} />
      ) : null}
      {!isLoading ? (
        <p>Loading...</p>
      ) : (
        <Personajes personajes={filterItem} getData={getData} />
      )}
      <div className="paginacion">
        <button onClick={() => setPagina(pagina-1)}>-</button>
        <span>{pagina}</span>
        <button onClick={() => setPagina(pagina+1)}>+</button>
      </div>
    </div>
  );
}

export default App;
