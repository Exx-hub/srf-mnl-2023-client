import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

interface BannerProps {
  logoImage: string;
  bgImageClass: string;
  title?: string;
  withCta: boolean;
}

function Banner({ logoImage, bgImageClass, title, withCta }: BannerProps) {
  return (
    <section className={`${styles.bannerContainer} ${styles[bgImageClass]}`}>
      <div className={styles.bannerDetailsDiv}>
        <img src={logoImage} alt="" />
        <h5>{title}</h5>
        {withCta && <Link to="/courses">Get Started</Link>}
      </div>
    </section>
  );
}

export default Banner;
