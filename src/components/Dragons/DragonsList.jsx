import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ScreenBody/Header"
import axios from "axios";
import DragonCard from "./DragonCard";

export default function DragonsList() {
    const [dragonsList, setDragonsList] = useState([])
    const navigate = useNavigate()

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
                <button className="add-button" onClick={() => navigate('/create')}>Cadastrar Novo Dragão</button>
            </div>

            <div className="dragons-list-container">
                {renderDragonsList()}
            </div>





        </Fragment>
    )
}
