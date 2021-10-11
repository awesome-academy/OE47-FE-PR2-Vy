import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatusRoleUserAction, changeStatusActiveUserAction } from '../../../features/ManageUserSlice';

const UserItem = ({ user, key }) => {
    const roleData = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
    ];
    const activeData = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
    ];
    const dispatch = useDispatch();

    const handleChangeRoleUser = (e) => {
        dispatch(changeStatusRoleUserAction({ id: user.id, role: e.target.value }))
    }

    const handleChangeActiveUser = (e) => {
        dispatch(changeStatusActiveUserAction({ id: user.id, active: e.target.value }))
    }

    const renderRoleSelect = (arr, value) => {
        return (
            <select defaultValue={value} onChange={handleChangeRoleUser}>
                {arr.map((item, key) => {
                    return (
                        <option
                            value={item.value}
                            key={key}
                            defaultValue={value}
                        >
                            {item.label}
                        </option>
                    )
                })}
            </select>
        )
    }

    const renderActiveSelect = (arr, value) => {
        return (
            <select defaultValue={value} onChange={handleChangeActiveUser}>
                {arr.map((item, key) => {
                    return (
                        <option
                            value={item.value}
                            key={key}
                            defaultValue={value}
                        >
                            {item.label}
                        </option>
                    )
                })}
            </select>
        )
    }

    return (
        <tr key={key}>
            <td className="cart-id">
                {user.id}
            </td>
            <td className="cart-title first-row">
                {user.firstname}
            </td>
            <td className="cart-title first-row">
                {user.lastname}
            </td>
            <td className="cart-title first-row">
                {user.email}
            </td>
            <td className="qua-col first-row">
                {renderRoleSelect(roleData, user.role)}
            </td>
            <td className="qua-col first-row">
                {renderActiveSelect(activeData, user.active)}
            </td>
        </tr>
    );
}

export default UserItem;
