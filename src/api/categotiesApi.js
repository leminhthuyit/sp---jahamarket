import request from '../Utils/request';

export const categoriesApi = async () => {
  try {
    const res = await request.post('/categories', { id: 2, name: 'Máy tính bảng' });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
