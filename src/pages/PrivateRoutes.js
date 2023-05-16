import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({element: Component, ...rest}) => {
    const isLogin = true

    return isLogin ? <Outlet /> : <Navigate to="/" />
} 

export default PrivateRoute