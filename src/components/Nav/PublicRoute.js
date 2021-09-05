import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/goit-react-hw-08-phonebook/',
    ...routeProps
}) {
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}