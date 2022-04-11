import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import DragonViewModal from "../Modals/DragonViewModal";
import DragonEditModal from "../Modals/DragonEditModal";
import axios from "axios";

export default function DragonCard({ dragon }) {

    const [dragonToView, setDragonToView] = useState()
    const [dragonViewModal, setDragonViewModal] = useState(false)

    const [dragonToEdit, setDragonToEdit] = useState()
    const [dragonEditModal, setDragonEditModal] = useState(false)


    async function deleteDragon() {

        await axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`)
        window.alert(`${dragon.name} deletado.`)
    }

    return (
        <Fragment>
            {
                dragonToView ?
                    <DragonViewModal show={dragonViewModal} setShow={setDragonViewModal} dragon={dragonToView}></DragonViewModal> : ""
            }

            {
                dragonToEdit ?
                    <DragonEditModal show={dragonEditModal} setShow={setDragonEditModal} dragon={dragonToEdit}></DragonEditModal> : ""
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
                                onClick={() => {
                                    setDragonToEdit(dragon)
                                    setDragonEditModal(true)
                                }}
                            ></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faTrash}
                                size='lg'
                                color="red"
                                className='icon'
                                onClick={() => deleteDragon()}
                            ></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )


}