import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './nav.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const HOME_PAGE = '/goit-react-hw-08-phonebook';

    return (
        <nav>
            <NavLink
                exact
                to={`${HOME_PAGE}/`}
                className={styles.link_title}
            >MY PhonebooK
            </NavLink>

            {isLoggedIn && (
                <NavLink                
                    to={`${HOME_PAGE}/contacts`}                
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >MY Contacts
                </NavLink>
            )}                         
        </nav>      
    );    
}