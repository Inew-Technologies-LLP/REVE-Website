import { useEffect, useState } from "react"

interface Cake {
  id:number
  name:string
  variant:string
  category:string
  eggless:boolean
  description:string
  image_url:string[]
}

const CakesCMS = () => {

  const [cakes,setCakes] = useState<Cake[]>([])
  const [editingId,setEditingId] = useState<number | null>(null)

  // 🔥 unified images state
  const [images,setImages] = useState<(string | File | null)[]>([])

  const [form,setForm] = useState({
    name:"",
    variant:"",
    category:"",
    eggless:false,
    description:""
  })

  const [search,setSearch] = useState("")
  const [isUploading,setIsUploading] = useState(false)

  const fetchCakes = async () => {
    const res = await fetch("http://localhost:5000/cakes")
    const data = await res.json()
    setCakes(data)
  }

  useEffect(()=>{
    fetchCakes()
  },[])

  const handleChange = (e:any) => {
    const {name,value,type,checked} = e.target

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    })
  }

  // 🔥 upload single
  const uploadSingleImage = (file: File): Promise<string> => {
    return new Promise((resolve,reject)=>{

      const formData = new FormData()
      formData.append("image", file)

      const xhr = new XMLHttpRequest()
      xhr.open("POST","http://localhost:5000/upload-image")

      xhr.onload = ()=>{
        if(xhr.status === 200){
          const data = JSON.parse(xhr.responseText)
          resolve(data.url)
        } else reject()
      }

      xhr.onerror = ()=>reject()
      xhr.send(formData)
    })
  }

  // 🔥 replace image
  const handleImageChange = (file:File,index:number) => {
    const updated = [...images]
    updated[index] = file
    setImages(updated)
  }

  // 🔥 delete image
  const removeImage = (index:number) => {
    const updated = [...images]
    updated[index] = null
    setImages(updated)
  }

  const handleSubmit = async (e:any) => {

    e.preventDefault()

    if(!form.name){
      alert("Please fill Name")
      return
    }

    try {

      setIsUploading(true)

      let finalImages:string[] = []

      for(let img of images){

        if(img === null) continue

        if(typeof img === "string"){
          finalImages.push(img)
        } else {
          const url = await uploadSingleImage(img)
          finalImages.push(url)
        }
      }

      const url = editingId
        ? `http://localhost:5000/cakes/${editingId}`
        : `http://localhost:5000/cakes`

      const method = editingId ? "PUT" : "POST"

      await fetch(url,{
        method,
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          ...form,
          image_url: finalImages
        })
      })

      // reset
      setForm({
        name:"",
        variant:"",
        category:"",
        eggless:false,
        description:""
      })

      setImages([])
      setEditingId(null)

      fetchCakes()

    } catch {
      alert("Something went wrong")
    } finally {
      setIsUploading(false)
    }
  }

  const deleteCake = async (id:number) => {
    if(!confirm("Delete this cake?")) return

    await fetch(`http://localhost:5000/cakes/${id}`,{
      method:"DELETE"
    })

    fetchCakes()
  }

  const editCake = (cake:Cake) => {

    setEditingId(cake.id)

    setForm({
      name:cake.name,
      variant:cake.variant,
      category:cake.category,
      eggless:cake.eggless,
      description:cake.description || ""
    })

    // 🔥 load existing images
    setImages(cake.image_url || [])
  }

  const filteredCakes = cakes.filter((cake)=>
    cake.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Cakes CMS
      </h2>

      <input
        type="text"
        placeholder="Search cakes..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="bg-gray-100 border border-black p-2 mb-6"
      />

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-wrap mb-10 items-center"
      >

        <input
          name="name"
          placeholder="Cake Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="variant"
          placeholder="Variant"
          value={form.variant}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
          rows={3}
        />

        <label className="flex items-center gap-2">
          Eggless
          <input
            type="checkbox"
            name="eggless"
            checked={form.eggless}
            onChange={handleChange}
          />
        </label>

        {/* 🔥 IMAGE SLOTS */}
        <div className="flex gap-3 flex-wrap">

          {[0,1,2].map((i)=>{

            const img = images[i]

            return (

              <div key={i} className="relative w-20 h-20 border">

                {img ? (
                  <>
                    <img
                      src={typeof img === "string" ? img : URL.createObjectURL(img)}
                      className="w-full h-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={()=>removeImage(i)}
                      className="absolute top-0 right-0 bg-black text-white text-xs px-1"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <label className="flex items-center justify-center w-full h-full cursor-pointer text-xl">
                    +
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e)=>{
                        const file = e.target.files?.[0]
                        if(file) handleImageChange(file,i)
                      }}
                    />
                  </label>
                )}

              </div>

            )
          })}

        </div>

        <button
          disabled={isUploading}
          className="bg-black text-white px-5 py-2"
        >
          {isUploading
            ? "Uploading..."
            : editingId
              ? "Update Cake"
              : "Add Cake"}
        </button>

      </form>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Variant</th>
            <th className="p-3 border">Eggless</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Images</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredCakes.map((cake)=>(

            <tr key={cake.id}>

              <td className="p-3 border">{cake.id}</td>
              <td className="p-3 border">{cake.name}</td>
              <td className="p-3 border">{cake.category}</td>
              <td className="p-3 border">{cake.variant}</td>
              <td className="p-3 border">{cake.eggless ? "Yes" : "No"}</td>

              <td className="p-3 border max-w-[200px] truncate">
                {cake.description}
              </td>

              <td className="p-3 border flex gap-2">
                {cake.image_url?.map((img,index)=>(
                  <img key={index} src={img} className="w-12 h-12 object-cover"/>
                ))}
              </td>

              <td className="p-3 border">
                <button
                  onClick={()=>editCake(cake)}
                  className="text-blue-600 mr-4"
                >
                  Edit
                </button>

                <button
                  onClick={()=>deleteCake(cake.id)}
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
  )
}

export default CakesCMS