import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { ICourse } from "../../types/interfaces";
import styles from "./CourseItem.module.css";

interface CourseItemProps {
  course: ICourse;
  onAddCourseClick: (course: ICourse) => void;
  modalOpen: boolean;
}

function CourseItem({ course, onAddCourseClick, modalOpen }: CourseItemProps) {
  const { title, description, price } = course;
  const token = useSelector(selectCurrentToken);

  const buttonContent = token ? (
    <button disabled={modalOpen} onClick={() => onAddCourseClick(course)}>
      Add Course
    </button>
  ) : (
    <h4>
      Please <Link to={"/login"}>login</Link> to add courses.
    </h4>
  );

  return (
    <section className={styles.courseItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.price}>₱{price}</p>
      {buttonContent}
    </section>
  );
}

export default CourseItem;
