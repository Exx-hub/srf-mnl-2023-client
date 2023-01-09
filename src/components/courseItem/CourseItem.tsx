import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { useEnrollCourseMutation } from "../../features/users/userApiSlice";
import { ICourse } from "../../types/interfaces";
import styles from "./CourseItem.module.css";

interface CourseItemProps {
  course: ICourse;
}

function CourseItem({ course }: CourseItemProps) {
  const { title, description, price, _id } = course;
  const token = useSelector(selectCurrentToken);

  const [enrollCourse, { isLoading, isError, isSuccess }] =
    useEnrollCourseMutation();

  const onAddCourseClick = async (courseId: string) => {
    try {
      await enrollCourse(courseId);
      alert("course enrolled!");
    } catch (err) {
      console.log(err);
    }
  };

  const buttonContent = token ? (
    <button onClick={() => onAddCourseClick(_id)}>Add Course</button>
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
