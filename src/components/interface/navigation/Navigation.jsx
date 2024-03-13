import { Link } from 'react-router-dom';

import styles from './Navigation.module.sass';

const Navigation = () => {
    return (
        <nav className={styles.navWrapper}>
            <ul className={styles.navWrapper__list}>
                <li className={styles.navWrapper__list_item}>
                    <Link
                        to="/"
                        className={styles.navWrapper__list_item_btn}>
                        Popular
                    </Link>
                </li>
                <li className={styles.navWrapper__list_item}>
                    <Link
                        to="/phrase"
                        className={styles.navWrapper__list_item_btn}>
                        Search for phrase
                    </Link>
                </li>
                <li className={styles.navWrapper__list_item}>
                    <Link
                        to="/random"
                        className={styles.navWrapper__list_item_btn}>
                        Random GIF
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
