import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {

  const navigate = useNavigate()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleLogin = async (e:React.FormEvent) => {

    e.preventDefault()

    try{

      const res = await fetch("http://localhost:5000/admin/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
      })

      const data = await res.json()

      if(data.success){

        sessionStorage.setItem("adminAuth","true")

        navigate("/admin/dashboard")

      }else{
        setError("Invalid username or password")
      }

    }catch(err){
      setError("Server error")
    }

  }

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-[400px] bg-white shadow-lg p-8">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border p-3"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white py-3"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin