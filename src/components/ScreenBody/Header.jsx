import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";
import greenDragon from "../../assets/images/green-dragon.png"

export default function Header() {
    const navigate = useNavigate()
    const { doLogout } = useContext(AuthContext)

    return (
        <Fragment>
            <div className='header'>
                <div className='header-container'>
                    <div className="logo-container">
                        <img
                            src={greenDragon}
                            alt="green-dragon" />
                        <h1>Dragons</h1>
                    </div>
                    <ul>
                        <li onClick={() => navigate('/dragons')}>Inicio</li>
                        <li onClick={() => {
                            doLogout()
                            navigate('/')
                        }}>
                            Sair</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}