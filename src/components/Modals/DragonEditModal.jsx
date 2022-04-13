import { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { DragonsContext } from "../Context/DragonsContext";
import RedDragon from "../../assets/images/red-dragon.png" 

export default function DragonEditModal({ show, setShow, dragon }) {
    const [fields, setFields] = useState(dragon)
    const { getDragonsList } = useContext(DragonsContext)

    async function editDragon() {
        await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`, fields)
    }

    return (
        <Fragment>

            <div className="edit-modal" style={show ? { display: "initial" } : { display: "none" }}>
                <div className="edit-modal-shadow" onClick={() => setShow(false)}></div>
                <div className="edit-modal-container">
                    <div className="close-button-container">
                        <div onClick={() => setShow(false)}>
                            <FontAwesomeIcon
                                icon={faClose}
                                size='2x'
                                color="red"
                                className='icon'
                                style={{ cursor: "pointer" }}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-edit-body">
                        <h1>Editar dragão</h1>
                        <div className="dragon-edit-content">
                            <div className="dragon-info">
                                <img
                                    src={RedDragon}
                                    alt="red-dragon" />
                                <h2>{dragon.name}</h2>
                            </div>
                            <div className="form-container">
                                <div className="name-container">
                                    <h3>Nome: </h3>
                                    <input
                                        type="text"
                                        value={fields.name}
                                        onChange={(e) => setFields({ ...fields, name: e.target.value })} />
                                </div>
                                <div className="type-container">
                                    <h3>Tipo: </h3>
                                    <input
                                        type="text"
                                        value={fields.type}
                                        onChange={(e) => setFields({ ...fields, type: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="edit-modal-buttons">
                            <button
                                className='back-button'
                                onClick={() => {
                                    editDragon()
                                    setShow(false)
                                }} >Voltar</button>
                            <button
                                className='add-button'
                                onClick={() => {
                                    editDragon()
                                    getDragonsList()
                                    getDragonsList()
                                    setShow(false)
                                }}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}