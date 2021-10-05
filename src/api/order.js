import request from "./axios";

export const createOrder = async (path, params) => {
	const res = await request.post(path, params);
	return res;
};

export const getOrdersByUser = async (path, params) => {
	const res = await request.get(path, {
		params: { id_user: params }
	});
	return res;
}

export const changeStatusOrder = async (path, id, status) => {
	const res = await request.patch(`${path}/${id}`, {
		status: status
	});
	return res;
}
