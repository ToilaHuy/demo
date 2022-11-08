import { NextPage } from 'next';
import styles from './styles.module.scss';

const Header: NextPage = () => {
    return (
        <div className={styles.wrapped}>
            <div className={styles.logo}>
                <a href="#">
                    <img src="/svg/topRight.svg" alt="" />
                </a>
            </div>
            <button className={styles.btnLg}>LOGIN</button>
        </div>
    );
};

export default Header;
