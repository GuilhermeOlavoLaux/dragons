import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ScreenBody/Header"
import DragonCard from "./DragonCard";
import { DragonsContext } from "../Context/DragonsContext";

export default function DragonsList() {
    const navigate = useNavigate()
    const { getDragonsList, dragonsList } = useContext(DragonsContext)

    useEffect(() => {
        getDragonsList()
    }, [])

    function renderDragonsList() {

        dragonsList.sort(function (dragon, nextDragon) {
            if (dragon.name.toLowerCase() > nextDragon.name.toLowerCase()) {
                return 1;
            }
            if (dragon.name.toLowerCase() < nextDragon.name.toLowerCase()) {
                return -1;
            }
            return 0;
        })

        const dragonsCards = dragonsList.map((dragon, index) => {
            return (
                <>
                    <DragonCard key={index} dragon={dragon} />
                </>
            )
        })
        return dragonsCards
    }

    return (
        <Fragment>

            <Header></Header>

            <div className="add-dragon-button-container">
                <button
                    className="add-button"
                    onClick={() => {
                        navigate('/create')
                    }}
                >Cadastrar Novo Dragão</button>
            </div>

            <div className="dragons-list-container">
                {renderDragonsList()}
            </div>

        </Fragment>
    )
}
