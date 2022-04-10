import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";


export default function Header() {
    const navigate = useNavigate()
    const { authenticated, setAuthenticated } = useContext(AuthContext)

    return (
        <Fragment>
            <div className='header'>
                <div className='header-container'>

                    <div className="logo-container">

                        <img src="https://media.discordapp.net/attachments/957014892500635669/962377039434887238/kindpng_570205.png" alt="" />
                        <h1>Sicredi Dragons</h1>
                    </div>
                    <ul>
                        <li onClick={() => navigate('/dragons')}>Inicio</li>

                        <li onClick={() => {
                            navigate('/')
                            setAuthenticated(false)
                        }}>
                            Sair</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}