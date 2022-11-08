import { NextPage } from 'next';
import styles from './styles.module.scss';

const Content: NextPage = () => {
    return (
        <div className={styles.wrapped}>
            <section className={styles.top}>
                <img src="/logos.svg" alt="" />
                <figcaption>You'll be in great company with other developers we've trained</figcaption>
            </section>
            <section className={styles.middle}>
                <div>
                    <div>
                        WANT TO SKIP <br /> THE DOCS?
                    </div>
                    <div>There’s an easier way to master React Query.</div>
                    <div>
                        Our linear course is like having a smart, experienced friend sit down next to you, walk you
                        through each concept, and apply what you learn. It’s our secret sauce.
                    </div>
                    <div>Start Learning Today</div>
                </div>
                <div className={styles.box}>
                    <div>Ingredients:</div>
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Non-contextual introduction</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Quiz</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Non-contextual practice</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Contextual practice</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Repeat For Each Topic</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <div>
                            <span>+</span>
                            <span>Real-world project</span>
                        </div>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                    <hr />
                </div>
            </section>
            <section className={styles.latest}>
                <div>
                    MAKE IT CLICK
                    <div className={styles.latestImg}>
                        <img src="/svg/eyes.svg" alt="" />
                    </div>
                </div>
                <div>Everything you need to know to master React Query</div>
                <div>
                    <div className={styles.card}>
                        <div>
                            <div>01</div>
                            <div>Querying Data</div>
                            <div>
                                Learn how to create basic queries and access that data from the cache in your React
                                Components.
                            </div>
                        </div>
                        <div>
                            <div className={styles.btnItem}>LESSON</div>
                            <div className={styles.btnItem}>QUIZ</div>
                            <div className={styles.btnItem}>PRACTICE</div>
                            <div className={styles.btnItem}>PROJECT</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <div>01</div>
                            <div>Querying Data</div>
                            <div>
                                Learn how to create basic queries and access that data from the cache in your React
                                Components.
                            </div>
                        </div>
                        <div>
                            <div className={styles.btnItem}>LESSON</div>
                            <div className={styles.btnItem}>QUIZ</div>
                            <div className={styles.btnItem}>PRACTICE</div>
                            <div className={styles.btnItem}>PROJECT</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <div>01</div>
                            <div>Querying Data</div>
                            <div>
                                Learn how to create basic queries and access that data from the cache in your React
                                Components.
                            </div>
                        </div>
                        <div>
                            <div className={styles.btnItem}>LESSON</div>
                            <div className={styles.btnItem}>QUIZ</div>
                            <div className={styles.btnItem}>PRACTICE</div>
                            <div className={styles.btnItem}>PROJECT</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <div>01</div>
                            <div>Querying Data</div>
                            <div>
                                Learn how to create basic queries and access that data from the cache in your React
                                Components.
                            </div>
                        </div>
                        <div>
                            <div className={styles.btnItem}>LESSON</div>
                            <div className={styles.btnItem}>QUIZ</div>
                            <div className={styles.btnItem}>PRACTICE</div>
                            <div className={styles.btnItem}>PROJECT</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <div>01</div>
                            <div>Querying Data</div>
                            <div>
                                Learn how to create basic queries and access that data from the cache in your React
                                Components.
                            </div>
                        </div>
                        <div>
                            <div className={styles.btnItem}>LESSON</div>
                            <div className={styles.btnItem}>QUIZ</div>
                            <div className={styles.btnItem}>PRACTICE</div>
                            <div className={styles.btnItem}>PROJECT</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;
