import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './nav.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <nav>
            <NavLink
                exact
                to="/"
                className={styles.link_title}
            >MY PhonebooK
            </NavLink>

            {isLoggedIn && (
                <NavLink                
                    to='/contacts'                
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >MY Contacts
                </NavLink>
            )}                         
        </nav>      
    );    
}