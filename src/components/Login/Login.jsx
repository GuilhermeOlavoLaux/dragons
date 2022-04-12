import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { doLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    function validateUser() {
        if (userName === "Teste" && password === "123") {
            doLogin()
        }
        navigate('/dragons')
    }

    return (
        <Fragment>
            <div className="login">
                <div className="login-container">
                    <img
                        className="flying-dragon"
                        src="https://media.discordapp.net/attachments/957014892500635669/962165788888924200/red-dragon-8bit.png"
                        alt="" />
                    <div className="login-info">
                        <img src="https://media.discordapp.net/attachments/957014892500635669/962193228629684305/warior-8bit.png?width=432&height=473" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, esse? Eligendi reprehenderit magni cupiditate sed quasi qui aut sit, nam doloribus omnis veniam amet accusamus sequi excepturi repudiandae iusto quidem?</p>
                    </div>
                    <div className="login-form">
                        <h1>Login</h1>
                        <p>Nome:</p>
                        <input type="text"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                        <p>Senha:</p>
                        <input type="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <button
                            onClick={() => {
                                validateUser();
                            }}
                        >Entrar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
