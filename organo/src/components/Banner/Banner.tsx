import bannerImage from "../../imgs/Banner.png";
import styles from './banner.module.css';

export default function Banner() {
  return (
    <header className={styles.banner}>
        <img className={styles.imagemBanner} src={bannerImage} />
    </header>
  );
}
