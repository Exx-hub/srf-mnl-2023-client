import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import { useGetUserQuery } from "../../features/users/userApiSlice";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const userId = useSelector(selectCurrentUserId);

  const { data, isLoading, isSuccess, isError } = useGetUserQuery(userId, {
    pollingInterval: 1000 * 30,
    refetchOnFocus: true,
  });

  if (isLoading) {
    return <h1>Fetching Data...</h1>;
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
          {data?.data.courses.map((course) => (
            <li>{course}</li>
          ))}
        </ul>
      ) : (
        <h2>No Courses enrolled.</h2>
      );
  }
  return (
    <section>
      <h2>User Profile</h2>
      <h3>Name: {data?.data.firstname}</h3>
      <h3>Email: {data?.data.email}</h3>
      <h3>Mobile: {data?.data.mobile}</h3>
      <h3>Enrolled Courses:</h3>
      {enrolledCourses}
    </section>
  );
}

export default UserProfile;
