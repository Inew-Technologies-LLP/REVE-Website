require("dotenv").config()

const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())



const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  port: process.env.db_port
})

db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err)
  } else {
    console.log("Connected to MySQL database successfully")
  }
})

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")
const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage() })



const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.endpoint,
  credentials: {
    accessKeyId: process.env.access_key_id,
    secretAccessKey: process.env.secret_access_key,
  }
})



app.get("/cakes", (req, res) => {

  db.query("SELECT * FROM cakes", (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    const cakes = result.map(item => {

      let images = []

      if (!item.image_url) {
        images = []
      }
      else if (typeof item.image_url === "string") {

        try {
          images = JSON.parse(item.image_url)
        }
        catch {
          images = item.image_url.split(",")
        }

      }
      else {
        images = item.image_url
      }

      return {
        ...item,
        image_url: images
      }

    })

    res.json(cakes)

  })

})

app.post("/cakes", (req, res) => {

  const { name, variant, category, eggless, image_url, description } = req.body;

  const sql = `
    INSERT INTO cakes (name, variant, category, eggless, image_url, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, variant, category, eggless, image_url, description],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({ message: "Cake added successfully" });
    }
  );
});

app.put("/cakes/:id", (req, res) => {

  const { name, variant, category, eggless, image_url, description } = req.body;

  let sql;
  let values;

  // ✅ If new images are provided → update images
  if (image_url !== undefined) {

    sql = `
    UPDATE cakes
    SET name=?, variant=?, category=?, eggless=?, image_url=?, description=?
    WHERE id=?
  `;

    values = [
      name,
      variant,
      category,
      eggless,
      JSON.stringify(image_url),
      description,
      req.params.id
    ];

  } else {

    sql = `
    UPDATE cakes
    SET name=?, variant=?, category=?, eggless=?, description=?
    WHERE id=?
  `;

    values = [
      name,
      variant,
      category,
      eggless,
      description,
      req.params.id
    ];
  }

  db.query(sql, values, (err, result) => {

    if (err) return res.status(500).json(err);

    res.json({ message: "Cake updated successfully" });

  });

});

app.post("/admin/login", (req, res) => {

  const { username, password } = req.body

  const sql = "SELECT * FROM admins WHERE username=? AND password=?"

  db.query(sql, [username, password], (err, result) => {

    if (err) return res.status(500).json(err)

    if (result.length > 0) {
      res.json({ success: true })
    } else {
      res.json({ success: false, message: "Invalid credentials" })
    }

  })

})

app.post("/admin/forgot-password", (req, res) => {

  const { email, newPassword } = req.body

  const sql = "UPDATE admins SET password=? WHERE email=?"

  db.query(sql, [newPassword, email], (err, result) => {

    if (err) return res.status(500).json(err)

    res.json({ message: "Password updated successfully" })

  })

})



app.post("/chocolates", (req, res) => {

  const { name, variant, category, image_url } = req.body

  const sql = `
  INSERT INTO chocolates (name, variant, category, image_url)
  VALUES (?, ?, ?, ?)
  `

  db.query(
    sql,
    [name, variant, category, JSON.stringify(image_url)],
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }

      res.json({ message: "Chocolate added" })
    }
  )

})



app.delete("/cakes/:id", (req, res) => {

  const id = req.params.id;

  const sql = "DELETE FROM cakes WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ message: "Cake deleted successfully" });

  });

});
app.get("/chocolates", (req, res) => {

  db.query("SELECT * FROM chocolates", (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    const chocolates = result.map(item => ({
      ...item,
      image_url: item.image_url || ""   // ✅ always string
    }))

    res.json(chocolates)

  })

})


app.post("/chocolates", (req, res) => {

  const { name, variant, category, image_url } = req.body

  const sql = `
  INSERT INTO chocolates (name, variant, category, image_url)
  VALUES (?, ?, ?, ?)
  `

  db.query(
    sql,
    [name, variant, category, image_url || ""],
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }

      res.json({ message: "Chocolate added" })
    }
  )

})

app.put("/chocolates/:id", (req, res) => {

  const { name, variant, category, image_url } = req.body

  const sql = `
  UPDATE chocolates
  SET name=?, variant=?, category=?, image_url=?
  WHERE id=?
  `

  const values = [
    name,
    variant,
    category,
    image_url || "",   // ✅ always string
    req.params.id
  ]

  db.query(sql, values, (err, result) => {

    if (err) return res.status(500).json(err)

    res.json({ message: "Chocolate updated successfully" })

  })

})

app.delete("/chocolates/:id", (req, res) => {

  db.query(
    "DELETE FROM chocolates WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Chocolate deleted successfully" })

    }
  )

})



app.get("/hamper-hero", (req, res) => {

  db.query("SELECT * FROM hamper_hero", (err, result) => {

    if (err) return res.status(500).json(err)

    res.json(result)

  })

})


app.post("/hamper-hero", (req, res) => {

  const { image_url } = req.body

  db.query(
    "INSERT INTO hamper_hero (image_url) VALUES (?)",
    [image_url],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Hero image added" })

    }
  )

})


app.get("/hamper-gallery", (req, res) => {

  db.query("SELECT * FROM hamper_gallery", (err, result) => {

    if (err) return res.status(500).json(err)

    res.json(result)

  })

})


app.post("/hamper-gallery", (req, res) => {

  const { image_url } = req.body

  db.query(
    "INSERT INTO hamper_gallery (image_url) VALUES (?)",
    [image_url],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Gallery image added" })

    }
  )

})

app.put("/hamper-gallery/:id", (req, res) => {

  const { image_url } = req.body
  const id = req.params.id

  const sql = "UPDATE hamper_gallery SET image_url=? WHERE id=?"

  db.query(sql, [image_url, id], (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    res.json({ message: "Gallery image updated" })

  })

})

app.put("/hamper-hero/:id", (req, res) => {

  const { image_url } = req.body
  const id = req.params.id

  const sql = "UPDATE hamper_hero SET image_url=? WHERE id=?"

  db.query(sql, [image_url, id], (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    res.json({ message: "Hero image updated" })

  })

})

app.delete("/hamper-gallery/:id", (req, res) => {

  db.query(
    "DELETE FROM hamper_gallery WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Deleted" })

    }
  )

})


app.delete("/hamper-hero/:id", (req, res) => {

  db.query(
    "DELETE FROM hamper_hero WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Hero deleted" })

    }
  )

})

// =======================
// WORKSHOPS HERO
// =======================

// GET HERO IMAGES
app.get("/workshops-hero", (req, res) => {

  db.query("SELECT * FROM workshops_hero", (err, result) => {

    if (err) return res.status(500).json(err)

    res.json(result)

  })

})


// ADD HERO IMAGE
app.post("/workshops-hero", (req, res) => {

  const { image_url } = req.body

  db.query(
    "INSERT INTO workshops_hero (image_url) VALUES (?)",
    [image_url],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Hero image added" })

    }
  )

})


// UPDATE HERO IMAGE
app.put("/workshops-hero/:id", (req, res) => {

  const { image_url } = req.body
  const id = req.params.id

  const sql = "UPDATE workshops_hero SET image_url=? WHERE id=?"

  db.query(sql, [image_url, id], (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    res.json({ message: "Hero image updated" })

  })

})


// DELETE HERO IMAGE
app.delete("/workshops-hero/:id", (req, res) => {

  db.query(
    "DELETE FROM workshops_hero WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Hero deleted" })

    }
  )

})


// =======================
// WORKSHOPS GALLERY
// =======================

// GET GALLERY IMAGES
app.get("/workshops-gallery", (req, res) => {

  db.query("SELECT * FROM workshops_gallery", (err, result) => {

    if (err) return res.status(500).json(err)

    res.json(result)

  })

})


// ADD GALLERY IMAGE
app.post("/workshops-gallery", (req, res) => {

  const { image_url } = req.body

  db.query(
    "INSERT INTO workshops_gallery (image_url) VALUES (?)",
    [image_url],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Gallery image added" })

    }
  )

})


// UPDATE GALLERY IMAGE
app.put("/workshops-gallery/:id", (req, res) => {

  const { image_url } = req.body
  const id = req.params.id

  const sql = "UPDATE workshops_gallery SET image_url=? WHERE id=?"

  db.query(sql, [image_url, id], (err, result) => {

    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    res.json({ message: "Gallery image updated" })

  })

})


// DELETE GALLERY IMAGE
app.delete("/workshops-gallery/:id", (req, res) => {

  db.query(
    "DELETE FROM workshops_gallery WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Deleted" })

    }
  )

})

// =======================
// WORKSHOP TYPES
// =======================

// GET ALL TYPES
app.get("/workshops-types", (req, res) => {

  db.query("SELECT * FROM workshops_types", (err, result) => {

    if (err) return res.status(500).json(err)

    res.json(result)

  })

})


// ADD TYPE (MAX 2)
app.post("/workshops-types", (req, res) => {

  const { image_url, heading, content, tag } = req.body

  db.query("SELECT COUNT(*) as count FROM workshops_types", (err, result) => {

    if (result[0].count >= 2) {
      return res.status(400).json({ message: "Only 2 workshop types allowed" })
    }

    db.query(
      "INSERT INTO workshops_types (image_url, heading, content, tag) VALUES (?, ?, ?, ?)",
      [image_url, heading, content, tag],
      (err, result) => {

        if (err) return res.status(500).json(err)

        res.json({ message: "Workshop type added" })

      }
    )

  })

})


// UPDATE TYPE
app.put("/workshops-types/:id", (req, res) => {

  const { image_url, heading, content, tag } = req.body
  const id = req.params.id

  let sql
  let values

  if (tag !== undefined) {

    sql = `
      UPDATE workshops_types 
      SET image_url=?, heading=?, content=?, tag=? 
      WHERE id=?
    `

    values = [image_url, heading, content, tag || null, id]

  } else {

    sql = `
      UPDATE workshops_types 
      SET image_url=?, heading=?, content=? 
      WHERE id=?
    `

    values = [image_url, heading, content, id]

  }

  db.query(sql, values, (err) => {

    if (err) return res.status(500).json(err)

    res.json({ message: "Workshop type updated" })

  })

})


// DELETE TYPE
app.delete("/workshops-types/:id", (req, res) => {

  db.query("DELETE FROM workshops_types WHERE id=?", [req.params.id], (err) => {

    if (err) return res.status(500).json(err)

    res.json({ message: "Deleted" })

  })

})
// DELETE TYPE
app.delete("/workshops-types/:id", (req, res) => {

  db.query(
    "DELETE FROM workshops_types WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) return res.status(500).json(err)

      res.json({ message: "Deleted" })

    }
  )

})


app.post("/upload-image", upload.single("image"), async (req, res) => {

  try {

    const file = req.file
    const fileName = Date.now() + "-" + file.originalname

    const command = new PutObjectCommand({
      Bucket: "reve",
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype
    })

    await s3.send(command)

    const imageUrl = `https://pub-2b8954364be5464e8c96d5db8c58e029.r2.dev/${fileName}`

    res.json({ url: imageUrl })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Upload failed" })
  }

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});