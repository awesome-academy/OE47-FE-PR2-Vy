import { Route, Redirect } from 'react-router-dom';
import Header from './../../components/homepage/partials/Header';
import Footer from './../../components/homepage/partials/Footer';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const profile = localStorage.getItem('profile') || null;

    return <Route {...rest} render={(props) => (
        profile
            ?
            <>
                <Header />
                <Component {...props} />
                <Footer />
            </>
            :
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
}

export default PrivateRoute;
