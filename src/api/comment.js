import request from "./axios";

export const getListComment = async (path, params) => {
	const res = await request.get(path, {
		params: { productId: params }
	});
	return res;
};

export const createComment = async (path, params) => {
	const res = await request.post(path, params);
	return res;
};
