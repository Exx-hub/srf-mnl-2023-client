import styles from "./CourseItem.module.css";

interface ICourse {
  title: string;
  description: string;
  price: string;
}

interface CourseItemProps {
  course: ICourse;
}

function CourseItem({ course }: CourseItemProps) {
  const { title, description, price } = course;
  return (
    <section className={styles.courseItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.price}>₱{price}</p>
      <button>Add Course</button>
    </section>
  );
}

export default CourseItem;
