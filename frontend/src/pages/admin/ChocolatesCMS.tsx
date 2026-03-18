import { useEffect, useState } from "react"

interface Chocolate {
  id:number
  name:string
  variant:string
  category:string
  image_url:string
}

const ChocolatesCMS = () => {

  const [chocolates,setChocolates] = useState<Chocolate[]>([])
  const [editingId,setEditingId] = useState<number | null>(null)

  // ✅ single image
  const [image,setImage] = useState<string | File | null>(null)

  const [form,setForm] = useState({
    name:"",
    variant:"",
    category:""
  })

  const [search,setSearch] = useState("")
  const [isUploading,setIsUploading] = useState(false)

  const fetchChocolates = async () => {
    const res = await fetch("http://localhost:5000/chocolates")
    const data = await res.json()
    setChocolates(data)
  }

  useEffect(()=>{
    fetchChocolates()
  },[])

  const handleChange = (e:any) => {
    const {name,value} = e.target
    setForm({...form,[name]: value})
  }

  // ✅ upload single image
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

  const handleSubmit = async (e:any) => {

    e.preventDefault()

    if(!form.name || !form.category){
      alert("Fill required fields")
      return
    }

    try {

      setIsUploading(true)

      let finalImage = ""

      if(image){
        if(typeof image === "string"){
          finalImage = image
        } else {
          finalImage = await uploadSingleImage(image)
        }
      }

      const url = editingId
        ? `http://localhost:5000/chocolates/${editingId}`
        : `http://localhost:5000/chocolates`

      const method = editingId ? "PUT" : "POST"

      await fetch(url,{
        method,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          ...form,
          image_url: finalImage
        })
      })

      // reset
      setForm({name:"",variant:"",category:""})
      setImage(null)
      setEditingId(null)

      fetchChocolates()

    } catch {
      alert("Error")
    } finally {
      setIsUploading(false)
    }
  }

  const deleteChocolate = async (id:number) => {
    if(!confirm("Delete?")) return

    await fetch(`http://localhost:5000/chocolates/${id}`,{
      method:"DELETE"
    })

    fetchChocolates()
  }

  const editChocolate = (item:Chocolate) => {

    setEditingId(item.id)

    setForm({
      name:item.name,
      variant:item.variant,
      category:item.category
    })

    // ✅ load single image
    setImage(item.image_url)
  }

  const filteredChocolates = chocolates.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div>

      <h2 className="text-xl font-semibold mb-6">
        Chocolates CMS
      </h2>

      <input
        type="text"
        placeholder="Search..."
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
          placeholder="Name"
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

        {/* ✅ SINGLE IMAGE */}
        <div className="relative w-20 h-20 border">

          {image ? (
            <>
              <img
                src={typeof image === "string" ? image : URL.createObjectURL(image)}
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={()=>setImage(null)}
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
                  if(file) setImage(file)
                }}
              />
            </label>
          )}

        </div>

        <button
          disabled={isUploading}
          className="bg-black text-white px-5 py-2"
        >
          {isUploading
            ? "Uploading..."
            : editingId
              ? "Update"
              : "Add"}
        </button>

      </form>

      <table className="w-full border">

        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Variant</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredChocolates.map((item)=>(

            <tr key={item.id}>

              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">{item.variant}</td>

              <td className="border p-2">
                <img src={item.image_url} className="w-12 h-12 object-cover"/>
              </td>

              <td className="border p-2">
                <button
                  onClick={()=>editChocolate(item)}
                  className="text-blue-600 mr-3"
                >
                  Edit
                </button>

                <button
                  onClick={()=>deleteChocolate(item.id)}
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

export default ChocolatesCMS