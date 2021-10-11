import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routerHomepage } from '../../route/constants';
import { validateEmailReg } from '../../ultils';
import CustomizedSnackbars from '../alert';
import { useHistory } from 'react-router-dom';
import { handleLogin } from '../../features/UserSlice';

const form = [
    { name: "email", type: "text", label: "Email address", error: '' },
    { name: "password", type: "password", label: "Password", error: '' }
];

const Login = () => {
    const [formData, setFormData] = useState(form);
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });
    const status = useSelector(state => state.user.status);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlerSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        dispatch(handleLogin(data));
    }

    useEffect(() => {
        if (status === 'loginSucess') {
            setOpenAlert({
                open: true,
                severity: 'success',
                text: 'LOGIN SUCCESS!'
            });
            setTimeout(() => {
                history.push("/");
            }, 800);
        }
        if (status === 'loginFailed') {
            setOpenAlert({
                open: true,
                severity: 'error',
                text: 'LOGIN FAILED. PLEASE TRY AGAIN!'
            });
        }
    }, [status]);

    const renderForm = (arr) => {
        return arr && arr.map((value, key) => {
            return (
                <div className="group-input" key={key}>
                    <label htmlFor={value.label}>{value.label} *</label>
                    <input
                        type={value.name == "password" && !isRevealPwd ? "password" : "text"}
                        name={value.name}
                        onChange={handleChangeInput}
                    />
                    {value.error && <small>{value.error}</small>}
                    {value.name == "password" && <span onClick={() => setIsRevealPwd(prevState => !prevState)}
                    >{isRevealPwd ? "Hide password" : "Show password"}</span>}
                </div>
            )
        })
    }

    const handleChangeInput = (e) => {
        let temp = [...formData];
        const indexProduct = temp.findIndex((val) => val.name == e.target.name);
        switch (e.target.name) {
            case "email":
                !validateEmailReg(e.target.value)
                    ?
                    temp[indexProduct].error = "Email is invalid!"
                    :
                    temp[indexProduct].error = '';
                break;
            default:
                break;
        }
        setFormData(temp);
    }

    return (
        <>
            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-form">
                                <h2>Login</h2>
                                <form onSubmit={handlerSubmit}>
                                    {renderForm(formData)}
                                    <button type="submit" className="site-btn login-btn">Sign In</button>
                                </form>
                                <div className="switch-login">
                                    <NavLink to={routerHomepage.register} className="or-login">Or Create An Account</NavLink>
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

export default Login;
