import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './usermenu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import defaultAvatar from './avatar.png';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div className={styles.container}>
            <img src={avatar} alt="" width="24" className={styles.avatar} />
            <span className={styles.userName}>hello, {name}</span>
            <Button
                className={styles.Btn}
                variant="outline-light"
                type="button"
                onClick={()=>dispatch(authOperations.logOut())}
            >Log out</Button>
        </div>
    );
}
