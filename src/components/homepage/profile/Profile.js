import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersByUserAction } from '../../../features/OrderSlice';
import { updateProfileAction } from '../../../features/UserSlice';
import CustomSpinner from '../../../UI/CustomSpinner';
import { BootstrapButton } from '../../../UI/BootstrapButton';
import { validateEmailReg, validatePhoneReg } from '../../../ultils';
import DeleteIcon from '@mui/icons-material/Delete';
import FileBase64 from 'react-file-base64';
import CustomizedSnackbars from '../../alert';
import OrderItem from './OrderItem';
import _ from 'lodash';

const form = [
    { name: "firstname", type: "text", label: "Firstname", error: '', col: "6" },
    { name: "lastname", type: "text", label: "Lastname", error: '', col: "6" },
    { name: "email", type: "text", label: "Email", error: '', col: "6" },
    { name: "phone", type: "number", label: "Phone", error: '', col: "6" },
    { name: "street_address", type: "text", label: "Street Address", error: '', col: "12" },
    { name: "district", type: "text", label: "District", error: '', col: "6" },
    { name: "city", type: "text", label: "City", error: '', col: "6" }
];

const Profile = ({ profile }) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const status = useSelector(state => state.user.status);
    const [formData, setFormData] = useState(form);
    const [image, setImage] = useState('');
    const [openAlert, setOpenAlert] = useState({
        open: false,
        severity: 'info',
        text: ''
    });

    useEffect(() => {
        dispatch(getOrdersByUserAction(profile.id));
        setImage(profile.image);
    }, [profile]);

    useEffect(() => {
        if (status === 'updateProfileSucess') {
            setOpenAlert({
                open: true,
                severity: "success",
                text: 'UPDATE YOUR INFORMATION SUCCESS!'
            })
        }
        if (status === 'updateProfileFailed') {
            setOpenAlert({
                open: true,
                severity: "error",
                text: 'SOMETHING WRONG. PLEASE TRY AGAIN!'
            })
        }
    }, [status]);

    const handleChangeInput = (e, label) => {
        let temp = [...formData];
        const indexProduct = temp.findIndex((val) => val.name == e.target.name);
        switch (e.target.name) {
            case "firstname":
            case "lastname":
                !e.target.value ?
                    temp[indexProduct].error = [`${label} can't be blank!`]
                    :
                    temp[indexProduct].error = '';
                break;
            case "email":
                !validateEmailReg(e.target.value)
                    ?
                    temp[indexProduct].error = "Email is invalid!"
                    :
                    temp[indexProduct].error = '';
                break;
            case "phone":
                !validatePhoneReg(e.target.value)
                    ?
                    temp[indexProduct].error = "Phone is invalid!"
                    :
                    temp[indexProduct].error = '';
                break;
            default:
                break;
        }
        setFormData(temp);
    }

    const renderForm = (arr) => {
        return arr.map((value, key) => {
            return (
                <div className={`col-lg-${value.col} group-input`} key={key} >
                    <label htmlFor={value.name}>{value.label}</label>
                    <input
                        type={value.type}
                        name={value.name}
                        id={value.name}
                        defaultValue={profile[value.name]}
                        onChange={handleChangeInput}
                    />
                </div>
            )
        })
    }

    const renderOrders = (arr) => {
        return arr.length > 0
            ?
            arr.map((value, key) => {
                return (
                    <OrderItem
                        order={value}
                        key={key}
                    />
                )
            })
            :
            <p>
                You don't have any orders yet!
            </p>
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...profile,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            street_address: e.target.street_address.value,
            district: e.target.district.value,
            city: e.target.city.value,
            image: image
        }
        if (!checkField(data)) {
            setOpenAlert({
                open: true,
                severity: "error",
                text: 'PLEASE CHECK YOUR INFORMATION!'
            })
        }
        if (!_.isEqual(data, profile)) {
            dispatch(updateProfileAction({ id: profile.id, user: data }));
        }
    }

    const checkField = (user) => {
        const { email, firstname, lastname } = user;
        return validateEmailReg(email) && firstname && lastname;
    }

    const getFiles = (files) => {
        setImage(files.base64);
    }

    return (
        <>
            <div className="profile spad">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            {image
                                ?
                                <img src={image} className="w-100" alt={`image user ${profile.firstname} ${profile.lastname}`} />
                                :
                                <img src="/images/avatar-default.jpg" className="w-100" alt="avatar-default user" />
                            }
                            <FileBase64
                                className="form-control py-4"
                                id="inputImage"
                                multiple={false}
                                onDone={(e) => getFiles(e)}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <div className="login-form">
                                <form className="row" onSubmit={handlerSubmit} >
                                    {renderForm(formData)}
                                    <div className="col-lg-12 group-input">
                                        <BootstrapButton type="submit" >UPDATE</BootstrapButton>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="order-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Shipping Address</th>
                                    <th>Order Detail</th>
                                    <th>Payment Method</th>
                                    <th>Total</th>
                                    <th>Created At</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? <CustomSpinner /> : renderOrders(orders)}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default Profile;
