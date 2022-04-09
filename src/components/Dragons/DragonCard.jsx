import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import DragonViewModal from "../Modals/DragonViewModal";

export default function DragonCard({ dragon }) {

    const [dragonToView, setDragonToView] = useState()
    const [dragonViewModal, setDragonViewModal] = useState(false)


    return (
        <Fragment>
            {
                dragonToView ?
                    <DragonViewModal show={dragonViewModal} setShow={setDragonViewModal} dragon={dragonToView}></DragonViewModal> : ""
            }


            <div className="dragon-card">
                <h1>{dragon.name}</h1>

                <div className="dragon-card-buttons">
                    <ul>

                        <li>
                            <FontAwesomeIcon
                                icon={faEye}
                                size='lg'
                                color="#bbffbb"
                                className='icon'
                                onClick={() => {
                                    setDragonToView(dragon)
                                    setDragonViewModal(true)
                                }}
                            ></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faEdit}
                                size='lg'
                                color="green"
                                className='icon'
                            ></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faTrash}
                                size='lg'
                                color="red"
                                className='icon'
                            ></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )


}