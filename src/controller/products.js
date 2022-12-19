import { getAll, get, addPost, deletePost, editPost } from "../services/products"

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

export const add = async (req, res) => {
  try {
    const payload = req.body;
    await addPost(payload);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm đc bài viết"
    })
  }
}

export const delete_ = async (req, res) => {
  try {
    const id = req.params;
    await deletePost(id);
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi"
    })
  }
}

export const edit = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params;
    await editPost(id, data)
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa đưcọ bro"
    })
  }
} 