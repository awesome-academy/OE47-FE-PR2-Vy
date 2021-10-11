import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleRegister } from '../../features/AuthSlice';
import { routerHomepage } from '../../route/constants';
import CustomizedSnackbars from './../alert/index';
import { validateEmailReg, validatePhoneReg } from './../../ultils/index';
import { useHistory } from "react-router-dom";

const form = [
    { name: "firstname", type: "text", label: "Firstname", error: '' },
    { name: "lastname", type: "text", label: "Lastname", error: '' },
    { name: "phone", type: "number", label: "Phone", error: '' },
    { name: "street_address", type: "text", label: "Street Address", error: '' },
    { name: "district", type: "text", label: "District", error: '' },
    { name: "city", type: "text", label: "City", error: '' },
    { name: "email", type: "text", label: "Email address", error: '' },
    { name: "password", type: "password", label: "Password", error: '' },
    { name: "confirmPassword", type: "password", label: "Confirm password", error: '' }
];

const Register = () => {
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });
    const [formData, setFormData] = useState(form);
    const status = useSelector(state => state.auth.status);
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const checkPasswordTrue = (password, confirmPassword) => {
        return password && confirmPassword && (password === confirmPassword);
    }

    const checkConditionField = (data) => {
        const { firstname, lastname, email, password } = data;
        return firstname && lastname && validateEmailReg(email) && password.length >= 6;
    }

    useEffect(() => {
        if (status === 'registerSucess') {
            setOpenAlert({
                open: true,
                severity: 'success',
                text: 'Register success!'
            });
            setTimeout(() => {
                history.push("/login");
            }, 800);
        }
        if (status === 'registerFailed') {
            setOpenAlert({
                open: true,
                severity: 'error',
                text: 'Register failed!'
            });
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: e.target.phone.value,
            street_address: e.target.street_address.value,
            district: e.target.district.value,
            city: e.target.city.value,
            active: "active",
            role: "user"
        }
        if (!checkConditionField(data)) {
            return setOpenAlert({
                open: true,
                severity: 'error',
                text: 'PLEASE CHECK YOUR INFORMATION!'
            });
        }
        if (!checkPasswordTrue(e.target.password.value, e.target.confirmPassword.value)) {
            return setOpenAlert({
                open: true,
                severity: 'error',
                text: 'PASSWORD NOT MATCH!'
            });
        }
        dispatch(handleRegister(data));
    }

    const handleChangeInput = (e, label) => {
        let temp = [...formData];
        const indexProduct = temp.findIndex((val) => val.name == e.target.name);
        switch (e.target.name) {
            case "firstname":
            case "lastname":
            case "street_address":
            case "district":
            case "city":
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
            case "password":
                e.target.value.length < 6
                    ?
                    (temp[indexProduct].error = "Password is too weak!")
                    :
                    (temp[indexProduct].error = '');
                break;
            default:
                break;
        }
        setFormData(temp);
    }

    const renderForm = (arr) => {
        return arr && arr.map((value, key) => {
            return (
                <div className="group-input" key={key}>
                    <label htmlFor={value.label}>{value.label} *</label>
                    <input
                        type={(value.name == "password" || value.name == "confirmPassword") && !isRevealPwd ? "password" : "text"}
                        name={value.name}
                        onChange={(e) => handleChangeInput(e, value.label)}
                    />
                    {value.error && <small>{value.error}</small>}
                </div>
            )
        })
    }

    return (
        <>
            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="register-form">
                                <h2>Register</h2>
                                <form onSubmit={handleSubmit}>
                                    {renderForm(formData)}
                                    <span onClick={() => setIsRevealPwd(prevState => !prevState)}
                                    >{isRevealPwd ? "Hide password" : "Show password"}</span>
                                    <button type="submit" className="site-btn login-btn">Sign Up</button>
                                </form>
                                <div className="switch-login">
                                    <NavLink to={routerHomepage.login} className="or-login">Or Login</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Register;
