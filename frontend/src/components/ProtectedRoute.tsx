import { Navigate } from "react-router-dom"

interface Props{
  children:React.ReactNode
}

const ProtectedRoute = ({children}:Props) => {

  const isAuth = sessionStorage.getItem("adminAuth")

  if(isAuth !== "true"){
    return <Navigate to="/admin" replace />
  }

  return <>{children}</>

}

export default ProtectedRoute