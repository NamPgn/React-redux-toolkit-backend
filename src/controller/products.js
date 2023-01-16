import { getAll, get, addPost, deleteProduct, editPost } from "../services/products"

export const getAllProducts = async (req, res) => {
  try {
    const data = await getAll();
    res.json({
      data
    });
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const _id = { _id: req.params.id };
    const data = await get(_id);
    res.json(data);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Không ìm thấy bài viết"
    })
  }
}

export const addProduct = async (req, res) => {
  try {
    const { name, category, price, descriptions } = req.body;
    const { filename } = req.file;
    // const payload=req.body;
    const dataAdd = {
      name: name,
      category: category,
      price: price,
      descriptions: descriptions,
      image: `http://localhost:${process.env.PORT}/product/` + filename
    }
    const data = await addPost(dataAdd);
    console.log("data",data);
    res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Không thêm đc Product"
    })
  }
}

export const delete_ = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteProduct(id);
    console.log("delete suscess")
    res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const editProduct = async (req, res) => {
  try {
    const { name, category, price, descriptions, _id } = req.body;
    const { filename } = req.file;
    const s = req.body;
    console.log('req.body', s);
    const dataEdit = {
      name: name,
      category: category,
      price: price,
      descriptions: descriptions,
      image: `http://localhost:${process.env.PORT}/product/` + filename
    }
    const data = await editPost(_id, dataEdit);
    console.log("data", _id, data);
    res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
} 