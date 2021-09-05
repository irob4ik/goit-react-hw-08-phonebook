import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function AuthNav() {
    const HOME_PAGE = '/goit-react-hw-08-phonebook';

    return (
        <nav>
            <NavLink                
                to={`${HOME_PAGE}/login`}                
                className={styles.link}
                activeClassName={styles.activeLink}
            >Login</NavLink>

            <NavLink                
                to={`${HOME_PAGE}/register`}                
                className={styles.link}
                activeClassName={styles.activeLink}
            >Register</NavLink>
        </nav>  
    );    
}