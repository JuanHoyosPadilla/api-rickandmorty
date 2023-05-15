import "./personajes.css";

export const Personaje = ({ personaje,getData }) => {
   
  return (
    <div className="container-personaje" onClick={() => getData(personaje.id)}>
      <img src={personaje.image} alt={personaje.name} />
      <span className="name">{personaje.name}</span>
      <span
        className={`status ${
          (personaje.status === "Alive" && "alive") ||
          (personaje.status === "Dead" && "dead") ||
          (personaje.status === "unknown" && "unknown")
        } `}
      >
        {personaje.status}
      </span>
      <p className="location">{personaje.location.name}</p>
    </div>
  );
};
