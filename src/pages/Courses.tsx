import Banner from "../components/banner";
import whiteSchool from "../assets/images/whiteSchool.jpg";
import CourseList from "../components/courseList";
import useTitle from "../hooks/useTitle";

function Courses() {
  useTitle("SRF MNL - Courses");
  return (
    <>
      <Banner
        bgImageClass="coursesBanner"
        logoImage={whiteSchool}
        withCta={false}
      />
      <CourseList />
    </>
  );
}

export default Courses;
