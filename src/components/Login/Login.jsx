import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import WariorRed from "../../assets/images/warior-8bit.png"
import RedDragon from "../../assets/images/red-dragon-8bit.png"


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
                        src={RedDragon}
                        alt="red-dragon" />
                    <div className="login-info">
                        <img src={WariorRed} alt="red-warior" />
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
