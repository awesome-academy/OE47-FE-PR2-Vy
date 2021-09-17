import request from "./axios";

export const getProductDetail = async (path, id) => {
    const res = await request.get(`${path}/${id}`);
    return res;
};
