import request from '../Utils/request';

export const productesApi = async () => {
  try {
    const res = await request.get('/productes', {
      params: {},
    });
    return res.data;
  } catch (error) {}
};

export const addProductesApi = async (newTodo) => {
  try {
    const res = await request.post(`/productes`, newTodo);
    return res.data;
  } catch (error) {}
};

export const updateProductesApi = async (idTodo, newTodo) => {
  try {
    const res = await request.patch(`/productes/${idTodo}`, newTodo);
    console.log(idTodo);
    console.log(newTodo);
    return res.data;
  } catch (error) {}
};

export const deteleProductesApi = async (idTodo) => {
  try {
    const res = await request.delete(`/productes/${idTodo}`);
    return res.data;
  } catch (error) {}
};
