import { useState, useEffect } from "react"
import CakesCMS from "./CakesCMS"
import ChocolatesCMS from "./ChocolatesCMS"
import HamperCMS from "./HamperCMS"
import WorkshopsCMS from "./WorkshopsCMS"

const AdminDashboard = () => {

  const [activeTab,setActiveTab] = useState("cakes")

  // ✅ logout on refresh only
  useEffect(() => {

    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      sessionStorage.removeItem("adminAuth")
      window.location.href = "/admin/login"
    }

  }, [])

  const logout = ()=>{
    sessionStorage.removeItem("adminAuth")
    window.location.href="/admin/login"
  }

  return (

    <div className="p-10">

      <div className="flex justify-between mb-10">

        <h1 className="text-3xl font-semibold">
          Admin CMS
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2"
        >
          Logout
        </button>

      </div>

      <div className="flex gap-6 mb-10">

        <button onClick={()=>setActiveTab("cakes")}>
          Cakes
        </button>

        <button onClick={()=>setActiveTab("chocolates")}>
          Chocolates
        </button>

        <button onClick={()=>setActiveTab("hampers")}>
          Hampers
        </button>

        <button onClick={()=>setActiveTab("workshops")}>
          Workshops
        </button>

      </div>

      {activeTab==="cakes" && <CakesCMS/>}
      {activeTab==="chocolates" && <ChocolatesCMS/>}
      {activeTab==="hampers" && <HamperCMS/>}
      {activeTab==="workshops" && <WorkshopsCMS/>}

    </div>

  )

}

export default AdminDashboard