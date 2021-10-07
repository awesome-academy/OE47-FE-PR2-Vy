import { Route, Redirect } from 'react-router-dom';
import Header from './../../components/homepage/partials/Header';
import Footer from './../../components/homepage/partials/Footer';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const profile = useSelector(state => state.user.profile);

    return <Route {...rest} render={(props) => (
        profile
            ?
            <>
                <Header profile={profile} />
                <Component profile={profile} />
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
