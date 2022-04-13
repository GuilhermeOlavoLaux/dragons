import { Navigate, Outlet } from 'react-router-dom'
import { DragonsProvider } from '../components/Context/DragonsContext'
import { AuthContext } from '../components/Context/AuthContext'
import { useContext } from 'react'

const ProtectedRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if (authenticated === null) {
    return null
  }
  
  return (
    authenticated ? (
      <DragonsProvider>
        <Outlet />
      </DragonsProvider>
    ) : (
      <Navigate to="/" />
    )
  )
}

export default ProtectedRoutes
