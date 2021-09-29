import { Route } from 'react-router-dom';
import Footer from './../../components/homepage/partials/Footer';
import Header from './../../components/homepage/partials/Header';

const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
        <>
            <Header />
            <Component {...props} />
            <Footer />
        </>
    )} />
}
export default PublicRoute;
