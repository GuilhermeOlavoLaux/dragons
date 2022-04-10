import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function DragonViewModal({ show, setShow, dragon }) {

    return (
        <Fragment>

            <div className="view-modal" style={show ? { display: "initial" } : { display: "none" }}>

                <div className="view-modal-shadow" onClick={() => setShow(false)}></div>
                <div className="view-modal-container">
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


                    <h1>Nome: {dragon.name}</h1>

                    <h1>Tipo: {dragon.type}</h1>

                    <h1>Criação: {dragon.createdAt}</h1>

                    <img src="https://media.discordapp.net/attachments/957014892500635669/962422251418963990/red-dragon.png" alt="" />

                </div>
            </div>

        </Fragment>
    )
}