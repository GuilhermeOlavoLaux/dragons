import { Fragment } from "react";
import Header from '../ScreenBody/Header'

export default function NewDragon() {


    return (
        <Fragment>

            <Header />
            <div className="add-drag-container">
                <img src="https://media.discordapp.net/attachments/957014892500635669/962826033013325944/blue-dragon.png" alt="" />




                <div className="add-dragon-form">
                    <div className="name-container">
                        <h1>Nome</h1>
                        <input type="text" />
                    </div>

                    <div className="type-container">
                        <h1>Type</h1>
                        <input type="text" />
                    </div>
                </div>
            </div>


        </Fragment>
    )
}