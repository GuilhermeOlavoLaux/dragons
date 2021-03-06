import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../ScreenBody/Header'
import blueDragon from "../../assets/images/blue-dragon.png"
export default function NewDragon() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate()
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
                <div className="add-dragon-form">
                    <img
                        src={blueDragon}
                        alt="blue-dragon" />
                    <div className="name-container">
                        <h1>Nome: </h1>
                        <input
                            type="text"
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="type-container">
                        <h1>Tipo: </h1>
                        <input
                            type="text"
                            onChange={(e) => { setType(e.target.value) }} />
                    </div>
                    <div className="add-container">
                        <button
                            className="back-button"
                            onClick={() => navigate('/dragons')
                            }
                        >Voltar</button>
                        <button
                            className="add-button"
                            onClick={() => saveNewDragon()
                            }
                        >Salvar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}