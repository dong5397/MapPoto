import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mysql from "mysql2/promise";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // appending extension
  },
});

const upload = multer({ storage: storage });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "photo_album",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post("/upload", upload.array("photo"), async (req, res) => {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  try {
    const insertPromises = req.files.map((file) => {
      const url = `./uploads/${file.filename}`;
      return pool.query(
        "INSERT INTO photos (upload_date, file_name, file_path, url) VALUES (NOW(), ?, ?, ?)",
        [file.originalname, `/uploads/${file.originalname}`, url]
      );
    });

    await Promise.all(insertPromises);

    res.send(req.files.map((file) => ({ url: `/uploads/${file.filename}` })));
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/photos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM photos");
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
