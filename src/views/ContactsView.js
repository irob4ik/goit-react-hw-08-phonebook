import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';

import styles from './views.module.css';

export default function ContactsView() {
    return (
    <>
        <Form />
            
        <div className={styles.container}>
            <h2 className={styles.contactList}>MY Contacts</h2>    
            <Filter/>
        </div>
            
        <Contacts />
    </>
    )
}