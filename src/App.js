import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';
// import styles from './app.module.css'
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/Nav/PrivateRoute';
import PublicRoute from './components/Nav/PublicRoute';
import authSelectors from './redux/auth/auth-selectors';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

export default function App() {
  const dispatch = useDispatch();
  const isfetchCurrentUser = useSelector(authSelectors.getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isfetchCurrentUser && (
        <>
          <AppBar />

          <Suspense fallback={<Loader />}>
            
              <Switch>

                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute path="/login" restricted redirectTo='/contacts'>
                  <LoginView />
                </PublicRoute>          
                <PrivateRoute path="/contacts" redirectTo='/login'>
                  <ContactsView />
                </PrivateRoute>            
                <Route exact path="" component={NotFoundView} />

              </Switch>
                    
          </Suspense>
        </>
      )}
    </Container>
  );
}