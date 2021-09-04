import { useSelector } from 'react-redux';
import Navigation from '../Nav/Navigation';
import AuthNav from '../Nav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './appbar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header className={styles.navContainer}>
            <Navigation />
            
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}