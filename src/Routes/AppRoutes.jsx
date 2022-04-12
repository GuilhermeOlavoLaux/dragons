import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import ProtectedRoutes from './ProtectedRoutes'
import DragonsList from '../components/Dragons/DragonsList'
import NewDragon from '../components/Dragons/NewDragon'
import LoginRoute from './LoginRoute'

export default function AppRoutes() {

  return (
    <Routes>
      <Route element={<LoginRoute />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dragons" element={<DragonsList />} />
        <Route path="/create" element={<NewDragon />} />
      </Route>
    </Routes>
  )
}