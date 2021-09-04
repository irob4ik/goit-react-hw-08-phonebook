import { useState } from 'react';
import { useDispatch } from 'react-redux'
import contactActions from '../../redux/phonebook-actions';
import { contactsOperations } from '../../redux';
import styles from './form.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const inputId = uuidv4();

    const handleSubmit = evt => {
        evt.preventDefault();
        const id = uuidv4();
        const newContact = { id, name, number };

        dispatch(contactActions.addContact(newContact));
        dispatch(contactsOperations.postContacts(newContact));

        setName('');
        setNumber('');      
    }

    const handleChange = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    return (
        <>        
        <form onSubmit={handleSubmit}  autoComplete="off" className={styles.phoneBookForm}>
            <label htmlFor={inputId} className={styles.formLabel}>Name</label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    id={inputId}
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            <label htmlFor={inputId} className={styles.formLabel}>Number</label>
                <input
                    className={styles.formInput}
                    type="tel"
                    name="number"
                    placeholder="Enter number"
                    id={inputId}
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            
          <button type="submit" className={styles.formBtn}>Add contact</button>          
        </form>
        </>
    );    
};