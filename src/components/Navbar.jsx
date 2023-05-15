import './navbar.css'
import logo from '../assets/logo.png'
export default function Navbar({setName}){
    return <div className="nav">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="search">
            <input type="text" name="search" placeholder='Personaje' onChange={(e) => setName(e.target.value)} />
        </div>
    </div>
}