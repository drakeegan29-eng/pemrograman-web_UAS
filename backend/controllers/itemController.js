import prisma from "../config/prisma.js";

// ================= GET ALL ITEMS =================
export const getItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        category: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json({
      success: true,
      data: items,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CREATE ITEM =================
export const createItem = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      type,
      status,
      foundDate,
      categoryId,
    } = req.body;

    // Nama file gambar (jika ada)
    const image = req.file ? req.file.filename : null;

    const item = await prisma.item.create({
      data: {
        name,
        description,
        location,
        type,
        status,
        image,
        foundDate: new Date(foundDate),
        categoryId: Number(categoryId),
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Barang berhasil ditambahkan",
      data: item,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE ITEM =================
export const updateItem = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const {
      name,
      description,
      location,
      type,
      status,
      foundDate,
      categoryId,
    } = req.body;

    // Jika upload gambar baru, gunakan gambar baru.
    // Jika tidak ada upload, gambar lama tetap dipakai.
    const data = {
      name,
      description,
      location,
      type,
      status,
      foundDate: new Date(foundDate),
      categoryId: Number(categoryId),
    };

    if (req.file) {
      data.image = req.file.filename;
    }

    const item = await prisma.item.update({
      where: {
        id,
      },
      data,
    });

    res.json({
      success: true,
      message: "Barang berhasil diupdate",
      data: item,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE ITEM =================
export const deleteItem = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.item.delete({
      where: {
        id,
      },
    });

    res.json({
      success: true,
      message: "Barang berhasil dihapus",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};