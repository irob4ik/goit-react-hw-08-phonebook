import React from 'react';
import Spinner from "react-loader-spinner";
import styles from './loader.module.css';

export default function Loader() {
    return (
        <div className={styles.Spinner}>
            <Spinner
                type="Puff"
                color="#3f51b599"
                height={150}
                width={150}
                timeout={3000}            
            />
        </div>
    );
} 