import {Personaje} from './Personaje.jsx'
export default function Personajes({personajes,getData}){
    return <div className="container-personajes">
    {personajes.map((personaje) => (
      <Personaje key={personaje.id} personaje={personaje} getData={getData} />
    )).slice(1,11) 
    }
  </div>
}