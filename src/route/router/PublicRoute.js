import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Footer from './../../components/homepage/partials/Footer';
import Header from './../../components/homepage/partials/Header';

const PublicRoute = ({ component: Component, ...rest }) => {
    const profile = useSelector(state => state.user.profile);

    return <Route {...rest} render={(props) => (
        <>
            <Header profile={profile} />
            <Component profile={profile} />
            <Footer />
        </>
    )} />
}

export default PublicRoute;
