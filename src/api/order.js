import request from "./axios";

export const createOrder = async (path, params) => {
	const res = await request.post(path, params);
	return res;
};

export const getOrders = async (path, params) => {
	const res = await request.get(path, params);
	return res;
}
