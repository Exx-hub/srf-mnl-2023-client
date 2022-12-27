import styles from "./Featured.module.css";

import book from "../../assets/images/bookCourse.jpg";
import find from "../../assets/images/findCourse.jpg";
import ride from "../../assets/images/rideWaves.jpg";

function Featured() {
  return (
    <section className={styles.featuredGrid}>
      <div>
        <img src={book} alt="" />
      </div>
      <div>
        <img src={find} alt="" />
      </div>
      <div>
        <img src={ride} alt="" />
      </div>
    </section>
  );
}

export default Featured;
