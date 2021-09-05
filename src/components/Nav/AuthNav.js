import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function AuthNav() {

    return (
        <nav>
            <NavLink                
                to='/login'                
                className={styles.link}
                activeClassName={styles.activeLink}
            >Login</NavLink>

            <NavLink                
                to='/register'               
                className={styles.link}
                activeClassName={styles.activeLink}
            >Register</NavLink>
        </nav>  
    );    
}