import { Fragment, useEffect, useState } from "react";
import BackgroundImage from "../ScreenBody/BackgroundImage";
import Header from "../ScreenBody/Header"
import axios from "axios";
import DragonCard from "./DragonCard";

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
                    <DragonCard dragonName={dragon.name}></DragonCard>
                </>
            )
        })

        return dragonsCards
    }



    console.log(dragonsList)
    return (
        <Fragment>

            <BackgroundImage></BackgroundImage>
            <Header></Header>


            <div className="dragons-list-container">

                {renderDragonsList()}
            </div>





        </Fragment>
    )
}
