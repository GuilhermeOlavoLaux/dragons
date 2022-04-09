import { Fragment, useEffect, useState } from "react";
import Header from "../ScreenBody/Header"
import axios from "axios";
import DragonCard from "./DragonCard";
import AddButton from "../utils/AddButton";
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
                    <div onClick={() => {
                    }} >

                        <DragonCard dragon={dragon}></DragonCard>
                    </div>
                </>
            )
        })

        return dragonsCards
    }



    console.log(dragonsList)
    return (
        <Fragment>

          
            <Header></Header>

            <div className="add-dragon-button-container">
                <AddButton text='Cadastrar Novo Dragão'></AddButton>
            </div>

            <div className="dragons-list-container">
                {renderDragonsList()}
            </div>





        </Fragment>
    )
}
