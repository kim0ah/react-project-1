import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.container}>

                <div className={styles.header_area}>

                    <div className={styles.logo}>
                        <a href={'#'} className={styles.logo_title}>React</a>
                    </div>

                    <nav className={styles.links}>
                        <a className={styles.link} href={'#'}>О библиотеке</a>
                        <a className={styles.link} href={'#'}>Документация</a>
                        <a className={styles.link} href={'#'}>Контакты</a>
                    </nav>

                </div>

            </div>

        </div>
    );
};

export default Header;