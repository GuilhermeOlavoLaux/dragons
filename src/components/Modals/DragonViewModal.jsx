import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function DragonViewModal({ show, setShow, dragon }) {

    var date = new Date(dragon.createdAt);

    const formatedDate = date.toISOString().substring(0, 10);

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


                    <div className="modal-edit-body">

                        <div className="name-container">
                            <h1>Nome: </h1>
                            <h3>{dragon.name}</h3>
                        </div>

                        <div className="type-container">
                            <h1>Tipo: </h1>
                            <h3>{dragon.type}</h3>
                        </div>


                        <div className="date-container">
                            <h1>Data: </h1>
                            <h3>{formatedDate}</h3>
                        </div>

                        <img
                            src="https://media.discordapp.net/attachments/957014892500635669/962422251418963990/red-dragon.png"
                            alt="" />

                    </div>
                </div>
            </div>

        </Fragment>
    )
}