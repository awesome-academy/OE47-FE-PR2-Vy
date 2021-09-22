import request from "./axios";

export const getProducts = async (base, params) => {
	const res = await request.get(base, {
		params: params,
	});
	return res;
};
