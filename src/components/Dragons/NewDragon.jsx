import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../ScreenBody/Header'

export default function NewDragon() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [type, setType] = useState('')

    const date = new Date()

    const dragonToSave = {
        name: name,
        type: type,
        createdAt: date
    }
    async function saveNewDragon() {

        if (dragonToSave.name === '') {
            window.alert("Informe um nome para o seu dragão")
            return

        }
        if (dragonToSave.type === '') {
            window.alert("Informe um tipo para o seu dragão")
            return
        }

        await axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`, dragonToSave)
        window.alert(`${dragonToSave.name} foi salvo com sucesso`)

    }


    return (
        <Fragment>

            <Header />
            <div className="add-drag-container">
                <img src="https://media.discordapp.net/attachments/957014892500635669/962826033013325944/blue-dragon.png" alt="" />

                <div className="add-dragon-form">
                    <div className="name-container">
                        <h1>Nome: </h1>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} />
                    </div>

                    <div className="type-container">
                        <h1>Tipo: </h1>
                        <input type="text" onChange={(e) => { setType(e.target.value) }} />

                    </div>
                    <div className="add-container">
                        <button className="back-button" onClick={() => navigate('/dragons')}>Voltar</button>

                        <button className="add-button" onClick={() => saveNewDragon()}>Salvar</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}