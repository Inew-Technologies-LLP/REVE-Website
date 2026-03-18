import { useEffect, useState } from "react"

interface ImageItem {
  id: number
  image_url: string
}

interface WorkshopType {
  id: number
  image_url: string
  heading: string
  content: string
  tag: string
}

const WorkshopsCMS = () => {

  const BASE_URL = import.meta.env.VITE_API_URL

  const [heroImages, setHeroImages] = useState<ImageItem[]>([])
  const [galleryImages, setGalleryImages] = useState<ImageItem[]>([])
  const [types, setTypes] = useState<WorkshopType[]>([])

  const [newType, setNewType] = useState({
    file: null as File | null,
    heading: "",
    content: "",
    tag: ""
  })

  const [isUploading,setIsUploading] = useState(false)

  const fetchWorkshops = async () => {
    const heroRes = await fetch(`${BASE_URL}/workshops-hero`)
    setHeroImages(await heroRes.json())

    const galleryRes = await fetch(`${BASE_URL}/workshops-gallery`)
    setGalleryImages(await galleryRes.json())
  }

  const fetchTypes = async () => {
    const res = await fetch(`${BASE_URL}/workshops-types`)
    setTypes(await res.json())
  }

  useEffect(() => {
    fetchWorkshops()
    fetchTypes()
  }, [])

  const uploadImage = async (file: File) => {

    try{
      setIsUploading(true)

      const formData = new FormData()
      formData.append("image", file)

      const res = await fetch(`${BASE_URL}/upload-image`, {
        method: "POST",
        body: formData
      })

      const data = await res.json()

      return data.url

    } finally {
      setIsUploading(false)
    }

  }

  const addHero = async (e: any) => {

    if (heroImages.length >= 8) {
      alert("Max 8 hero images allowed")
      return
    }

    const file = e.target.files[0]
    if (!file) return

    const url = await uploadImage(file)

    await fetch(`${BASE_URL}/workshops-hero`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: url })
    })

    fetchWorkshops()
  }

  const replaceHero = async (id: number, e: any) => {

    const file = e.target.files[0]
    if (!file) return

    const url = await uploadImage(file)

    await fetch(`${BASE_URL}/workshops-hero/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: url })
    })

    fetchWorkshops()
  }

  const addGallery = async (e: any) => {

    if (galleryImages.length >= 16) {
      alert("Max 16 gallery images allowed")
      return
    }

    const file = e.target.files[0]
    if (!file) return

    const url = await uploadImage(file)

    await fetch(`${BASE_URL}/workshops-gallery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: url })
    })

    fetchWorkshops()
  }

  const replaceGallery = async (id: number, e: any) => {

    const file = e.target.files[0]
    if (!file) return

    const url = await uploadImage(file)

    await fetch(`${BASE_URL}/workshops-gallery/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: url })
    })

    fetchWorkshops()
  }

  const addType = async () => {

    if (types.length >= 2) {
      alert("Only 2 types allowed")
      return
    }

    if (!newType.file) return

    const url = await uploadImage(newType.file)

    await fetch(`${BASE_URL}/workshops-types`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image_url: url,
        heading: newType.heading,
        content: newType.content,
        tag: newType.tag
      })
    })

    setNewType({ file: null, heading: "", content: "", tag: "" })
    fetchTypes()
  }

  const updateType = async (type: WorkshopType, file?: File) => {

    let url = type.image_url

    if (file) {
      url = await uploadImage(file)
    }

    await fetch(`${BASE_URL}/workshops-types/${type.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image_url: url,
        heading: type.heading,
        content: type.content,
        tag: type.tag
      })
    })

    fetchTypes()
  }

  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Workshops CMS
      </h2>

      {isUploading && (
        <p className="text-blue-600 mb-4">
          Uploading...
        </p>
      )}

      <h3 className="text-lg mb-4">Hero Images (Max 8)</h3>

      <table className="w-full border mb-6">
        <tbody>
          {heroImages.map((img, index) => (
            <tr key={img.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 text-center">
                <img src={img.image_url} className="w-20 h-20 object-cover mx-auto" />
              </td>
              <td className="border p-2 text-center">
                <input type="file" disabled={isUploading} onChange={(e) => replaceHero(img.id, e)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input type="file" disabled={isUploading} onChange={addHero} className="mb-10" />

      <h3 className="text-lg mb-4">Gallery Images (Max 16)</h3>

      <table className="w-full border mb-6">
        <tbody>
          {galleryImages.map((img, index) => (
            <tr key={img.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 text-center">
                <img src={img.image_url} className="w-20 h-20 object-cover mx-auto" />
              </td>
              <td className="border p-2 text-center">
                <input type="file" disabled={isUploading} onChange={(e) => replaceGallery(img.id, e)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input type="file" disabled={isUploading} onChange={addGallery} className="mb-10" />

      <h3 className="text-lg mb-4">Workshop Types (Max 2)</h3>

      {types.map((type) => (
        <div key={type.id} className="border p-4 mb-6">

          <img src={type.image_url} className="w-40 h-40 object-cover mb-4" />

          <input
            type="file"
            disabled={isUploading}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) updateType(type, file)
            }}
            className="mb-3"
          />

          <input
            type="text"
            value={type.heading}
            onChange={(e) => {
              const updated = types.map(t =>
                t.id === type.id ? { ...t, heading: e.target.value } : t
              )
              setTypes(updated)
            }}
            className="border w-full p-2 mb-2"
          />

          <textarea
            value={type.content}
            onChange={(e) => {
              const updated = types.map(t =>
                t.id === type.id ? { ...t, content: e.target.value } : t
              )
              setTypes(updated)
            }}
            className="border w-full p-2 mb-2"
          />

          <input
            type="text"
            placeholder="Tag"
            value={type.tag || ""}
            onChange={(e) => {
              const updated = types.map(t =>
                t.id === type.id ? { ...t, tag: e.target.value } : t
              )
              setTypes(updated)
            }}
            className="border w-full p-2 mb-2"
          />

          <button
            disabled={isUploading}
            onClick={() => updateType(type)}
            className="bg-black text-white px-4 py-2 mr-2"
          >
            Save
          </button>

        </div>
      ))}

      {types.length < 2 && (
        <div className="border p-4">

          <input
            type="file"
            disabled={isUploading}
            onChange={(e) => setNewType({ ...newType, file: e.target.files?.[0] || null })}
            className="mb-2"
          />

          <input
            type="text"
            placeholder="Tag"
            value={newType.tag}
            onChange={(e) => setNewType({ ...newType, tag: e.target.value })}
            className="border w-full p-2 mb-2"
          />

          <input
            type="text"
            placeholder="Heading"
            value={newType.heading}
            onChange={(e) => setNewType({ ...newType, heading: e.target.value })}
            className="border w-full p-2 mb-2"
          />

          <textarea
            placeholder="Content"
            value={newType.content}
            onChange={(e) => setNewType({ ...newType, content: e.target.value })}
            className="border w-full p-2 mb-2"
          />

          <button
            disabled={isUploading}
            onClick={addType}
            className="bg-black text-white px-4 py-2"
          >
            Add Type
          </button>

        </div>
      )}

    </div>
  )
}

export default WorkshopsCMS