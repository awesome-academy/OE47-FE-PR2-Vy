import request from "./axios";

export const getProducts = async (base, params) => {
	const res = await request.get(base, {
		params: params,
	});
	return res;
};

export const getManageByPage = async (base, params) => {
	const res = await request.get(base, {
		params: params,
	});
	return res;
};

export const createProduct = async (base, params) => {
	const res = await request.post(base, params);
	return res;
};


export const updateProduct = async (path, id, params) => {
	const res = await request.patch(`${path}/${id}`, { params: { id: params } });
	return res;
};

export const deleteProduct = async (path, id) => {
	const res = await request.delete(`${path}/${id}`);
	return res;
};
