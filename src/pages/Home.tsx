import Banner from "../components/banner";
import Featured from "../components/featured";

import blackSchool from "../assets/images/blackschool.jpg";
import useTitle from "../hooks/useTitle";

function Home() {
  useTitle("SRF MNL");

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
