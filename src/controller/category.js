import { addCategory, getAllCategory, getCategory, updateCategory } from "../services/category"
import Products from "../module/products";

export const getAll = async (req, res) => {
  try {
    const data = await getAllCategory();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getCategory(id);
    res.json(data)
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const readProductByCategory = async (req, res) => {
  try {
    const data = await Products.find().populate('category', 'name');
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const addCt = async (req, res) => {
  try {
    const data = req.body;
    const cate = await addCategory(data);
    res.json(cate)
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const updateCate = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const dataEdit = updateCategory(id, data);
    res.json(dataEdit);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

