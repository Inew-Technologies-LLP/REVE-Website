import { useEffect, useState } from "react"

interface Product{
  id:number
  name:string
  variant:string
  category:string
  eggless?:boolean
  image_url:string[]
}

interface ImageItem{
  id:number
  image_url:string
}

const AdminDashboard = () => {

  const [activeTab,setActiveTab] = useState("cakes")

  const [products,setProducts] = useState<Product[]>([])
  const [editingId,setEditingId] = useState<number | null>(null)

  const [selectedImages,setSelectedImages] = useState<File[]>([])

  const [form,setForm] = useState({
    name:"",
    variant:"",
    category:"",
    eggless:false
  })

  const [hamperText,setHamperText] = useState("")
  const [heroImages,setHeroImages] = useState<ImageItem[]>([])
  const [galleryImages,setGalleryImages] = useState<ImageItem[]>([])

  const fetchProducts = async()=>{

    const res = await fetch(`http://localhost:5000/${activeTab}`)
    const data = await res.json()

    setProducts(data)

  }

  const fetchHamper = async()=>{

    const textRes = await fetch("http://localhost:5000/hamper-text")
    const textData = await textRes.json()
    setHamperText(textData.content)

    const heroRes = await fetch("http://localhost:5000/hamper-hero")
    const heroData = await heroRes.json()
    setHeroImages(heroData)

    const galleryRes = await fetch("http://localhost:5000/hamper-gallery")
    const galleryData = await galleryRes.json()
    setGalleryImages(galleryData)

  }

  useEffect(()=>{

    if(activeTab==="hampers"){
      fetchHamper()
    }else{
      fetchProducts()
    }

  },[activeTab])

  useEffect(()=>{

    const handleRefresh = ()=>{
      sessionStorage.removeItem("adminAuth")
    }

    window.addEventListener("beforeunload",handleRefresh)

    return ()=>{
      window.removeEventListener("beforeunload",handleRefresh)
    }

  },[])

  const uploadImages = async()=>{

    const urls:string[]=[]

    for(const img of selectedImages){

      const formData=new FormData()
      formData.append("image",img)

      const res=await fetch("http://localhost:5000/upload-image",{
        method:"POST",
        body:formData
      })

      const data=await res.json()

      urls.push(data.url)

    }

    return urls

  }

  const handleSubmit = async(e:any)=>{

    e.preventDefault()

    if(selectedImages.length===0){
      alert("Upload image")
      return
    }

    if(selectedImages.length>3){
      alert("Maximum 3 images allowed")
      return
    }

    const imageUrls = await uploadImages()

    const url = editingId
      ? `http://localhost:5000/${activeTab}/${editingId}`
      : `http://localhost:5000/${activeTab}`

    const method = editingId ? "PUT" : "POST"

    await fetch(url,{
      method,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        ...form,
        image_url:imageUrls
      })
    })

    setForm({
      name:"",
      variant:"",
      category:"",
      eggless:false
    })

    setSelectedImages([])
    setEditingId(null)

    fetchProducts()

  }

  const deleteProduct = async(id:number)=>{

    const confirmDelete = confirm("Delete item?")

    if(!confirmDelete) return

    await fetch(`http://localhost:5000/${activeTab}/${id}`,{
      method:"DELETE"
    })

    fetchProducts()

  }

  const editProduct = (item:Product)=>{

    setEditingId(item.id)

    setForm({
      name:item.name,
      variant:item.variant,
      category:item.category,
      eggless:item.eggless || false
    })

  }

  const updateHamperText = async()=>{

    await fetch("http://localhost:5000/hamper-text",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({content:hamperText})
    })

    alert("Text updated")

  }

  const uploadHero = async()=>{

    if(heroImages.length>=8){
      alert("Maximum 8 hero images")
      return
    }

    const urls = await uploadImages()

    for(const url of urls){

      await fetch("http://localhost:5000/hamper-hero",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({image_url:url})
      })

    }

    fetchHamper()

  }

  const uploadGallery = async()=>{

    if(galleryImages.length>=16){
      alert("Maximum 16 gallery images")
      return
    }

    const urls = await uploadImages()

    for(const url of urls){

      await fetch("http://localhost:5000/hamper-gallery",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({image_url:url})
      })

    }

    fetchHamper()

  }

  const deleteHero = async(id:number)=>{

    await fetch(`http://localhost:5000/hamper-hero/${id}`,{
      method:"DELETE"
    })

    fetchHamper()

  }

  const deleteGallery = async(id:number)=>{

    await fetch(`http://localhost:5000/hamper-gallery/${id}`,{
      method:"DELETE"
    })

    fetchHamper()

  }

  const logout = ()=>{
    sessionStorage.removeItem("adminAuth")
    window.location.href="/admin/login"
  }

  return(

    <div className="p-10">

      <div className="flex justify-between mb-8">

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

      </div>

      {(activeTab==="cakes" || activeTab==="chocolates") && (

        <div>

          <form onSubmit={handleSubmit} className="flex gap-4 mb-10 flex-wrap">

            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              className="border p-2"
            />

            <input
              name="variant"
              placeholder="Variant"
              value={form.variant}
              onChange={(e)=>setForm({...form,variant:e.target.value})}
              className="border p-2"
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={(e)=>setForm({...form,category:e.target.value})}
              className="border p-2"
            />

            {activeTab==="cakes" && (

              <label>
                Eggless
                <input
                  type="checkbox"
                  checked={form.eggless}
                  onChange={(e)=>setForm({...form,eggless:e.target.checked})}
                />
              </label>

            )}

            <input
              type="file"
              multiple
              onChange={(e)=>setSelectedImages(Array.from(e.target.files || []))}
            />

            <button className="bg-black text-white px-4 py-2">
              {editingId ? "Update":"Add"}
            </button>

          </form>

          <table className="w-full border">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Variant</th>
                {activeTab==="cakes" && <th>Eggless</th>}
                <th>Images</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {products.map(item=>(

                <tr key={item.id}>

                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.variant}</td>

                  {activeTab==="cakes" && (
                    <td>{item.eggless ? "Yes":"No"}</td>
                  )}

                  <td>

                    <div className="flex gap-2">

                      {item.image_url?.map((img,index)=>(
                        <img
                          key={index}
                          src={img}
                          className="w-12 h-12 object-cover"
                        />
                      ))}

                    </div>

                  </td>

                  <td>

                    <button
                      onClick={()=>editProduct(item)}
                      className="text-blue-600 mr-4"
                    >
                      Edit
                    </button>

                    <button
                      onClick={()=>deleteProduct(item.id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {activeTab==="hampers" && (

        <div>

          <h2 className="text-xl mb-4">Hamper Text</h2>

          <textarea
            className="border w-full p-4 mb-4"
            rows={4}
            value={hamperText}
            onChange={(e)=>setHamperText(e.target.value)}
          />

          <button
            onClick={updateHamperText}
            className="bg-black text-white px-4 py-2 mb-10"
          >
            Update Text
          </button>

          <h2 className="text-xl mb-4">Hero Images (8)</h2>

          <div className="grid grid-cols-4 gap-4 mb-6">

            {heroImages.map(img=>(
              <div key={img.id}>

                <img
                  src={img.image_url}
                  className="w-full h-24 object-cover"
                />

                <button
                  onClick={()=>deleteHero(img.id)}
                  className="text-red-600"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>

          <input
            type="file"
            multiple
            onChange={(e)=>setSelectedImages(Array.from(e.target.files || []))}
          />

          <button
            onClick={uploadHero}
            className="bg-black text-white px-4 py-2 ml-4"
          >
            Upload Hero
          </button>

          <h2 className="text-xl mt-10 mb-4">
            Gallery Images (16)
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-6">

            {galleryImages.map(img=>(
              <div key={img.id}>

                <img
                  src={img.image_url}
                  className="w-full h-24 object-cover"
                />

                <button
                  onClick={()=>deleteGallery(img.id)}
                  className="text-red-600"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>

          <input
            type="file"
            multiple
            onChange={(e)=>setSelectedImages(Array.from(e.target.files || []))}
          />

          <button
            onClick={uploadGallery}
            className="bg-black text-white px-4 py-2 ml-4"
          >
            Upload Gallery
          </button>

        </div>

      )}

    </div>

  )

}

export default AdminDashboard