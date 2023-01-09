import { useGetCoursesQuery } from "../../features/courses/courseApiSlice";
import { ICourse } from "../../types/interfaces";
import CourseItem from "../courseItem";
import styles from "./CourseList.module.css";

const courses = [
  {
    title: "Catching a wave",
    description:
      "The most important thing when you catch a wave is timing. As see a wave rolling in, you should face your board toward shore and lie down, ready to paddle.",
    price: "1500",
    id: 1,
  },
  {
    title: "Paddling to the lineup",
    description:
      "While paddling to the lineup keep in your mind the mental map of the spot. You should know how to avoid crashing waves that could knock you off.",
    price: "2500",
    id: 2,
  },
  {
    title: "Turning the board",
    description:
      "So you're balanced and comfy on your board, riding down a wave's face. It's time to work on turning and maneuvering your board.",
    price: "3000",
    id: 3,
  },
  {
    title: "Basic Surf Tricks",
    description:
      "After some beginner drills and lessons, it's time for some advanced riding techniques and tricks for your rides.",
    price: "4000",
    id: 4,
  },
];

function CourseList() {
  const { data, isLoading, isSuccess, isError } = useGetCoursesQuery(
    "coursesList",
    { pollingInterval: 1000 * 60, refetchOnFocus: true }
  );

  console.log(data);

  let content;

  if (isLoading) {
    content = <h2>Fetching Resources --spinner here...</h2>;
  }

  if (isError) {
    content = <h2>Something went wrong, please refresh the page.</h2>;
  }

  if (isSuccess) {
    content = (
      <div className={styles.coursesGrid}>
        {data?.data.map((course: ICourse) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    );
  }

  return (
    <section className={styles.courseList}>
      <h2>Courses Offered:</h2>
      {content}
    </section>
  );
}

export default CourseList;
