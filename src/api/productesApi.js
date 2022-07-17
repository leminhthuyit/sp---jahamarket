import request from '../Utils/request';

export const productesApi = async () => {
  try {
    const res = await request.get(`/sanpham`, {
      params: {},
    });
    return res.data;
  } catch (error) {}
};

export const addProductesApi = async (newTodo) => {
  try {
    const res = await request.post(`/sanpham`, newTodo);
    return res.data;
  } catch (error) {}
};

export const updateProductesApi = async (id, newTodo) => {
  try {
    const res = await request.patch(`/sanpham/${id}`, newTodo);
    return res.data;
  } catch (error) {}
};

export const deteleProductesApi = async (idTodo) => {
  try {
    const res = await request.delete(`/sanpham/${idTodo}`);
    return res.data;
  } catch (error) {}
};
