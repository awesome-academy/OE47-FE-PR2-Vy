import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/admin/partials/Navbar';
import Sidebar from '../../components/admin/partials/Sidebar';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const profile = useSelector(state => state.user.profile);

    return <Route {...rest} render={(props) => (
        profile.role == "admin"
            ?
            <>
                <Navbar profile={profile} />
                <div id="layoutSidenav">
                    <Sidebar />
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid p-4">
                                <Component {...props} />
                            </div>
                        </main>
                    </div>
                </div>
            </>
            :
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
}

export default ProtectedRoute;
