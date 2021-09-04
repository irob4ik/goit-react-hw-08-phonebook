import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';
import styles from './app.module.css'

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));
// const NotFoundView = lazy(() => import('./views/NotFoundView'));



// import Form from './components/Form/Form';
// import Contacts from './components/Contacts/Contacts';
// import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          {/* <Route exact path="/contacts" component={ContactsView} />
          <Route exact path="" component={NotFoundView} /> */}
        </Switch>
      </Suspense>

      {/* <Form/>    
      <h2 className={styles.contactList}>Contacts</h2>    
      <Filter/>    
      <Contacts /> */}
      
    </Container>
  );
}