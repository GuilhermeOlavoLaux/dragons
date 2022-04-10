import { Fragment, useEffect, useState } from "react";
import Header from "../ScreenBody/Header"
import axios from "axios";
import DragonCard from "./DragonCard";
import DragonViewModal from "../Modals/DragonViewModal";

export default function DragonsList() {
    const [dragonsList, setDragonsList] = useState([])


    useEffect(() => {
        getDragonsList()

    }, [])

    async function getDragonsList() {
        const { data } = await axios.get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        setDragonsList(data)
    }


    function renderDragonsList() {
        const dragonsCards = dragonsList.map((dragon) => {
            return (
                <>
                    <DragonCard dragon={dragon} />
                </>
            )
        })

        return dragonsCards.sort()
    }

    return (
        <Fragment>


            <Header></Header>

            <div className="add-dragon-button-container">
                <button className="add-button">Cadastrar Novo Dragão</button>
            </div>

            <div className="dragons-list-container">
                {renderDragonsList()}
            </div>





        </Fragment>
    )
}
