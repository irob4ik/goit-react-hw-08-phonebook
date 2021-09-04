import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Navigation() {
    return (
        <nav>
            <NavLink
                exact
                to="/"
                className={styles.link_title}
            >MY PhonebooK</NavLink>

            <NavLink                
                to="/contacts"                
                className={styles.link}
                activeClassName={styles.activeLink}
            >Contacts</NavLink>              
        </nav>      
    );    
}