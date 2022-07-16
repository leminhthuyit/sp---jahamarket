import request from "../Utils/request";

export const categoriesApi = async () => {
  try {
    const res = await request.get("/categories", {
      params: {},
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
