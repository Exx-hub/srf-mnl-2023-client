import Banner from "../components/banner";
import Featured from "../components/featured";

import blackSchool from "../assets/images/blackschool.jpg";

function Home() {
  return (
    <>
      <Banner
        logoImage={blackSchool}
        bgImageClass="homeBanner"
        title="Find waves with us, book a class now!"
        withCta={true}
      />
      <Featured />
    </>
  );
}

export default Home;
