import express from "express";
import multer from "multer";
import path from "path";
import { processSecretSanta } from "../controllers/secretSantaController";

const router = express.Router();

// ✅ Multer Storage Configuration to Keep File Extensions
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Get file extension
    cb(null, file.fieldname + "-" + Date.now() + ext); // Save with timestamp
  }
});

const upload = multer({ storage });

router.post(
  "/assign",
  upload.fields([{ name: "employees" }, { name: "previous" }]),
  processSecretSanta
);

export default router;
