import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

// Semua endpoint harus login
router.use(authMiddleware);

// GET semua barang
router.get("/", getItems);

// CREATE barang + upload gambar
router.post("/", upload.single("image"), createItem);

// UPDATE barang + upload gambar baru (opsional)
router.put("/:id", upload.single("image"), updateItem);

// DELETE barang
router.delete("/:id", deleteItem);

export default router;