import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetCoursesQuery } from "../../features/courses/courseApiSlice";
import { useEnrollCourseMutation } from "../../features/users/userApiSlice";
import { ICourse } from "../../types/interfaces";
import CourseItem from "../courseItem";
import Modal from "../modal";
import Spinner from "../spinner";
import styles from "./CourseList.module.css";

function CourseList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError } = useGetCoursesQuery(
    "coursesList",
    {
      pollingInterval: 1000 * 300,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  const [
    enrollCourse,
    {
      isLoading: enrollLoading,
      isError: enrollError,
      isSuccess: enrollSuccess,
    },
  ] = useEnrollCourseMutation();

  const addCourse = async (courseId: string | undefined) => {
    try {
      await enrollCourse(courseId).unwrap();
      toast("Course Added Successfully!", {
        autoClose: 2000,
      });
      navigate("/profile");
    } catch (err) {
      console.log(err);
      toast.warn("Duplicate course or something went wrong.", {
        autoClose: 2000,
      });
      setModalOpen(false);
      setSelectedCourse(null);
    }
  };

  // i think this is an example of state batching
  const onAddCourseClick = (course: ICourse) => {
    window.scrollTo(0, 0);
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const onModalCancel = () => {
    setSelectedCourse(null);
    setModalOpen(false);
  };

  let content;

  if (isLoading) {
    content = (
      <>
        <h2>Fetching Resources. Please wait...</h2>
        <Spinner />
      </>
    );
  }

  if (isError) {
    content = <h2>Something went wrong, please refresh the page.</h2>;
  }

  if (isSuccess) {
    content = (
      <div className={styles.coursesGrid}>
        {data?.data.map((course: ICourse) => (
          <CourseItem
            key={course._id}
            course={course}
            onAddCourseClick={onAddCourseClick}
            modalOpen={modalOpen}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <section className={styles.courseList}>
        <h2>Courses Offered:</h2>
        {content}
      </section>
      {modalOpen && (
        <Modal
          course={selectedCourse}
          addCourse={addCourse}
          onCancel={onModalCancel}
          enrollLoading={enrollLoading}
        />
      )}
    </>
  );
}

export default CourseList;
