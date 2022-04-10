import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function DragonEditModal({ show, setShow, dragon }) {

    const initialDragon = {
        name: dragon.name,
        createdAt: dragon.createdAt,
        type: dragon.type
    }


    const [fields, setFields] = useState(initialDragon)


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

                    <h1>Editar dragão</h1>

                    <div className="dragon-edit-content">

                        <div className="dragon-info">

                            <img src="https://media.discordapp.net/attachments/957014892500635669/962422251418963990/red-dragon.png" alt="" />

                            <h2>{dragon.name}</h2>

                        </div>

                        <div className="name-container">
                            <h2>Nome: </h2>

                            <input type="text" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
                        </div>


                        <div className="type-container">
                            <h2>Tipo: </h2>

                            <input type="text" value={fields.type} onChange={(e) => setFields({ ...fields, type: e.target.value })} />
                        </div>

                    </div>


                    <button>Sair</button>
                    <button>Salvar</button>
                </div>
            </div>

        </Fragment>
    )
}