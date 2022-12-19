import Products from "../module/products"

export const getAll = async () => {
  return await Products.find().exec();
}

export const get = async (id) => {
  return await Products.findOne(id);
}

export const addPost = async (data) => {
  return await new Products(data).save();
}

export const deletePost = async (id) => {
  return await Products.findOneAndDelete(id)
}

export const editPost = async (id, data) => {
  return await Products.findOneAndUpdate(id, data)
}