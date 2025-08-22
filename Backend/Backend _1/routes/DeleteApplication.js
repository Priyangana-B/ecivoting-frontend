// backend/routes/download.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Fix for ES modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET - Download file by filename
router.get("/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", filename);

  res.download(filePath, filename, (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(404).json({ message: "File not found" });
    }
  });
});

export default router;
