import axios from "axios";
import { createContext, useState } from "react";

const DragonsContext = createContext();

function DragonsProvider({ children }) {


    const [dragonsList, setDragonsList] = useState([])

    async function getDragonsList() {
        const { data } = await axios.get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        setDragonsList(data)
    }


    return (
        <DragonsContext.Provider value={{ getDragonsList, dragonsList, setDragonsList }}>
            {children}
        </DragonsContext.Provider>
    )
}



export { DragonsContext, DragonsProvider }