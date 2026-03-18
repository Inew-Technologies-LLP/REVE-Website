import { useEffect, useState } from "react"

interface ImageItem{
  id:number
  image_url:string
}

const HamperCMS = () => {

  const [heroImages,setHeroImages] = useState<ImageItem[]>([])
  const [galleryImages,setGalleryImages] = useState<ImageItem[]>([])

  // 🔥 NEW: uploading state
  const [isUploading,setIsUploading] = useState(false)

  const fetchHamper = async()=>{

    const heroRes = await fetch("http://localhost:5000/hamper-hero")
    const heroData = await heroRes.json()
    setHeroImages(heroData)

    const galleryRes = await fetch("http://localhost:5000/hamper-gallery")
    const galleryData = await galleryRes.json()
    setGalleryImages(galleryData)

  }

  useEffect(()=>{
    fetchHamper()
  },[])

  const uploadImage = async(file:File)=>{

    try{
      setIsUploading(true)

      const formData = new FormData()
      formData.append("image",file)

      const res = await fetch("http://localhost:5000/upload-image",{
        method:"POST",
        body:formData
      })

      const data = await res.json()

      return data.url

    } finally {
      setIsUploading(false)
    }

  }

  const addHero = async(e:any)=>{

    const file = e.target.files[0]
    if(!file) return

    const url = await uploadImage(file)

    await fetch("http://localhost:5000/hamper-hero",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({image_url:url})
    })

    fetchHamper()

  }

  const addGallery = async(e:any)=>{

    const file = e.target.files[0]
    if(!file) return

    const url = await uploadImage(file)

    await fetch("http://localhost:5000/hamper-gallery",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({image_url:url})
    })

    fetchHamper()

  }

  const replaceHero = async(id:number,e:any)=>{

    const file = e.target.files[0]
    if(!file) return

    const url = await uploadImage(file)

    await fetch(`http://localhost:5000/hamper-hero/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({image_url:url})
    })

    fetchHamper()

  }

  const replaceGallery = async(id:number,e:any)=>{

    const file = e.target.files[0]
    if(!file) return

    const url = await uploadImage(file)

    await fetch(`http://localhost:5000/hamper-gallery/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({image_url:url})
    })

    fetchHamper()

  }

  

  return(

    <div>

      <h2 className="text-xl font-semibold mb-6">
        Hamper CMS
      </h2>

      {/* 🔥 Uploading indicator */}
      {isUploading && (
        <p className="text-blue-600 mb-4">
          Uploading...
        </p>
      )}

      {/* HERO */}

      <h3 className="text-lg mb-4">
        Hero Images
      </h3>

      <table className="w-full border mb-6">

        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No.</th>
            <th className="border p-2">Preview</th>
            <th className="border p-2">Update</th>
            
          </tr>
        </thead>

        <tbody>

          {heroImages.map((img,index)=>(

            <tr key={img.id}>

              <td className="border p-2 text-center">
                {index+1}
              </td>

              <td className="border p-2 text-center">
                <img
                  src={img.image_url}
                  className="w-20 h-20 object-cover mx-auto"
                />
              </td>

              <td className="border p-2 text-center">
                <input
                  type="file"
                  disabled={isUploading}
                  onChange={(e)=>replaceHero(img.id,e)}
                />
              </td>

              

            </tr>

          ))}

        </tbody>

      </table>

      {/* ADD HERO */}

      <input
        type="file"
        disabled={isUploading}
        onChange={addHero}
        className="mb-10"
      />

      {/* GALLERY */}

      <h3 className="text-lg mb-4">
        Gallery Images
      </h3>

      <table className="w-full border mb-6">

        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No.</th>
            <th className="border p-2">Preview</th>
            <th className="border p-2">Update</th>
            
          </tr>
        </thead>

        <tbody>

          {galleryImages.map((img,index)=>(

            <tr key={img.id}>

              <td className="border p-2 text-center">
                {index+1}
              </td>

              <td className="border p-2 text-center">
                <img
                  src={img.image_url}
                  className="w-20 h-20 object-cover mx-auto"
                />
              </td>

              <td className="border p-2 text-center">
                <input
                  type="file"
                  disabled={isUploading}
                  onChange={(e)=>replaceGallery(img.id,e)}
                />
              </td>

              
            </tr>

          ))}

        </tbody>

      </table>

      <input
        type="file"
        disabled={isUploading}
        onChange={addGallery}
      />

    </div>

  )

}

export default HamperCMS