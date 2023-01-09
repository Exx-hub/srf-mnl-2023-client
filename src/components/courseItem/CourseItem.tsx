import { useEnrollCourseMutation } from "../../features/users/userApiSlice";
import { ICourse } from "../../types/interfaces";
import styles from "./CourseItem.module.css";

interface CourseItemProps {
  course: ICourse;
}

function CourseItem({ course }: CourseItemProps) {
  const { title, description, price, _id } = course;

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
  return (
    <section className={styles.courseItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.price}>₱{price}</p>
      <button onClick={() => onAddCourseClick(_id)}>Add Course</button>
    </section>
  );
}

export default CourseItem;
