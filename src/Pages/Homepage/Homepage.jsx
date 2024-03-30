import styles from './Homepage.module.css'
import Header from "../../components/Header/index.js";
import Sidebar from "../../components/Sidebar/index.js";
import Hero from "../../components/Hero/index.js";
import Calendar2 from "../../components/Calendar2/index.js";

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className={styles.section_1}>
                <Sidebar />
                <Hero />
            </div>
            <div className={styles.calendar_container}>
                <Calendar2 />
            </div>

        </div>
    );
};

export default Homepage;