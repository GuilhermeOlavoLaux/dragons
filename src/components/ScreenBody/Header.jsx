import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <Fragment>
            <div className='header'>
                <div className='header-container'>
                    <h1>LOGO</h1>

                    <ul>
                        <li onClick={() => navigate('/')}>Inicio</li>

                        <li onClick={() => navigate('/')}>Sair</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}