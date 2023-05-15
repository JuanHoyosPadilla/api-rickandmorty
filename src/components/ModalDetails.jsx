import './modalDetails.css'
export default function ModalDetails({setIsModalOpen,personaje}){
    return <div className='modal-container'>
        <div className="modal-body">
            <div className="modal-header">
                <p>Details</p>
                <span onClick={() => setIsModalOpen(false)} >X</span>
            </div>
            <div className="content-body">
                <div className="imagen">
                    <img src={personaje.image} alt={personaje.name} />
                </div>
                <div className="details">
                    <span>Name: {personaje.name} </span>
                    <span>Status: {personaje.status} </span>
                    <span>Species: {personaje.species} </span>
                    <span>Origin: {personaje.origin.name} </span>
                    <span>Location: {personaje.location.name}</span>
                    <span>Number Episode: {personaje.episode.length} </span>
                </div>
            </div>
        </div>
    </div>
}