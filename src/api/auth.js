import request from "./axios";

export const register = async (path, params) => {
	const res = await request.post(path, params);
	return res;
};
