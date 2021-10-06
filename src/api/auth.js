import request from "./axios";

export const authentication = async (path, params) => {
	const res = await request.post(path, params);
	return res;
};

export const getAllUser = async (base) => {
	const res = await request.get(base);
	return res;
};

export const updateUser = async (path, id, user) => {
	const res = await request.patch(`${path}/${id}`, user);
	return res;
};

export const handleLogout = async (path, id, wishlist) => {
	const res = await request.patch(`${path}/${id}`, {
		wishlist: wishlist
	});
	return res;
};

export const changeRoleUser = async (path, id, role) => {
	const res = await request.patch(`${path}/${id}`, {
		role: role
	});
	return res;
};

export const changeActiveUser = async (path, id, active) => {
	const res = await request.patch(`${path}/${id}`, {
		active: active
	});
	return res;
};

export const getUserById = async (path, id) => {
	const res = await request.get(`${path}/${id}`);
	return res;
};
