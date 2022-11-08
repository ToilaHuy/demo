import { NextPage } from 'next';
import { useState } from 'react';
import styles from './styles.module.scss';

const TopContent: NextPage = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <section className={styles.wrapped}>
            <div className={styles.content}>
                <div className={styles.contentTitle}>LEVEL UP WITH REACT QUERY</div>
                <div className={styles.contentDes}>
                    The official React Query course will get you building apps like a pro.
                </div>
                <button className={styles.contentBtn}>GET STARTED TODAY</button>
            </div>
            <div className={styles.imgTopLeft}>
                <img src="/react-query-logo.svg" alt="" />
            </div>
            <div className={styles.imgBottomRight}>
                <img src="/tanstack-approved.svg" alt="" />
            </div>
            <div className={styles.contentTopRight}>
                <div>"Excellent course"</div>
                <div> -Christopher Heathwood</div>
                <div className={styles.starContainer}>
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                </div>
            </div>
            <div className={styles.contentBottomLeft}>
                <div>"Wow ... great course."</div>
                <div>-Scott Malstrom</div>
                <div className={styles.starContainer}>
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                    <img src="/svg/star.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default TopContent;
