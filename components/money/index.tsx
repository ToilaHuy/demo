import { NextPage } from 'next';
import styles from './styles.module.scss';

const Money: NextPage = () => {
    return (
        <div className={styles.wrapped}>
            <div>
                <div>
                    <div>GET THAT MONEY.</div>
                    <div>React Query helps you avoid technical debt. We’ll help you master React Query.</div>
                    <ul>
                        <li>Delete hundreds of lines of expensive code</li>
                        <li>Never worry about data fetching again</li>
                        <li>Level up your skills to get that raise</li>
                    </ul>
                    <div>Looks like a solid investment to me!</div>
                </div>
                <div>
                    <div>
                        <img src="/svg/money-stack.svg" alt="" />
                    </div>
                    <div>
                        <span className={styles.itemBlue}>
                            <img src="/svg/react-coin-blue.svg" alt="" />
                        </span>
                        <span className={styles.itemPink}>
                            <img src="/svg/react-coin-pink.svg" alt="" />
                        </span>
                        <span className={styles.itemPurple}>
                            <img src="/svg/react-coin-purple.svg" alt="" />
                        </span>
                        <span className={styles.itemRed}>
                            <img src="/svg/react-coin-red.svg" alt="" />
                        </span>
                        <span className={styles.itemYellow}>
                            <img src="/svg/react-coin-yellow.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.listCard}>
                    <div>
                        Hands down one of the best courses I've taken. It balances all aspects of the learning
                        experience from videos to practice projects. I highly recommend this to anyone at any point in
                        their career.
                    </div>
                    <div className={styles.starContainer}>
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                    </div>
                </div>
                <div className={styles.listCard}>
                    <div>
                        Hands down one of the best courses I've taken. It balances all aspects of the learning
                        experience from videos to practice projects. I highly recommend this to anyone at any point in
                        their career.
                    </div>
                    <div className={styles.starContainer}>
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                    </div>
                </div>
                <div className={styles.listCard}>
                    <div>
                        Hands down one of the best courses I've taken. It balances all aspects of the learning
                        experience from videos to practice projects. I highly recommend this to anyone at any point in
                        their career.
                    </div>
                    <div className={styles.starContainer}>
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                    </div>
                </div>
                <div className={styles.listCard}>
                    <div>
                        Hands down one of the best courses I've taken. It balances all aspects of the learning
                        experience from videos to practice projects. I highly recommend this to anyone at any point in
                        their career.
                    </div>
                    <div className={styles.starContainer}>
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                        <img src="/svg/star.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Money;
