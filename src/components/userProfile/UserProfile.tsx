import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import { useGetUserQuery } from "../../features/users/userApiSlice";
import { ICourse } from "../../types/interfaces";
import Spinner from "../spinner";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const userId = useSelector(selectCurrentUserId);

  const { data, isLoading, isSuccess, isError } = useGetUserQuery(userId, {
    pollingInterval: 1000 * 300,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <>
        <h2>Fetching Data. Please wait...</h2>
        <Spinner />
      </>
    );
  }

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  // console.log(data);

  let enrolledCourses;
  if (isSuccess) {
    enrolledCourses =
      data?.data.courses.length > 0 ? (
        <ul>
          {data?.data.courses.map((course: ICourse) => (
            <li key={course._id}>{course.title}</li>
          ))}
        </ul>
      ) : (
        <h2>No Courses enrolled.</h2>
      );
  }
  return (
    <section className={styles.userContainer}>
      <div className={styles.userWrapper}>
        <h2>User Info</h2>
        <h3>
          Name:
          <span>
            {data?.data.firstname} {data?.data.lastname}
          </span>
        </h3>
        <h3>
          Email: <span> {data?.data.email}</span>
        </h3>
        <h3>
          Mobile: <span> {data?.data.mobile}</span>
        </h3>
        <h2>Enrolled Courses:</h2>
        {enrolledCourses}
      </div>
    </section>
  );
}

export default UserProfile;
