import styles from "./Featured.module.css";

import book from "../../assets/images/bookCourse.jpg";
import find from "../../assets/images/findCourse.jpg";
import ride from "../../assets/images/rideWaves.jpg";

function Featured() {
  return (
    <section className={styles.featuredGrid}>
      <div className={styles.featuredItem}>
        <img src={book} alt="" />
        <h4>Find a Course</h4>
      </div>
      <div className={styles.featuredItem}>
        <img src={find} alt="" />
        <h4>Book a Course</h4>
      </div>
      <div className={styles.featuredItem}>
        <img src={ride} alt="" />
        <h4>Ride the waves</h4>
      </div>
    </section>
  );
}

export default Featured;
