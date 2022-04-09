import { Fragment } from "react";
import Header from "./ScreenBody/Header";

export default function Login() {

    return (
        <Fragment>

            <div className="background-container">
                <img src="https://media.discordapp.net/attachments/957014892500635669/962160334389518346/skye-background.png"
                    alt=""
                    className="background-image"
                />
            </div>


            <div className="login">

                <div className="login-container">
                    <img
                        className="flying-dragon"
                        src="https://media.discordapp.net/attachments/957014892500635669/962165788888924200/red-dragon-8bit.png"
                        alt="" />
                    <div className="login-info">
                        <img src="https://media.discordapp.net/attachments/957014892500635669/962139976538140722/red-dragon.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, esse? Eligendi reprehenderit magni cupiditate sed quasi qui aut sit, nam doloribus omnis veniam amet accusamus sequi excepturi repudiandae iusto quidem?</p>
                    </div>

                    <div className="login-form">
                        <h1>Login</h1>


                        <p>Nome:</p>

                        <input type="text" />


                        <p>Senha:</p>

                        <input type="password" />


                        <button>Entrar</button>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
