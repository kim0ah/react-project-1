import styles from './Hero.module.css'
import { Carousel } from 'antd';
const Hero = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }
    return (
        <div className={styles.hero}>
            <Carousel afterChange={onChange}>
                <div>
                    <h3 className={`${styles.content_style} ${styles.slide_1}`}>1</h3>
                </div>
                <div>
                    <h3 className={`${styles.content_style} ${styles.slide_2}`}>2</h3>
                </div>
                <div>
                    <h3 className={`${styles.content_style} ${styles.slide_3}`}>3</h3>
                </div>
                <div>
                    <h3 className={`${styles.content_style} ${styles.slide_4}`}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;