import { Outlet } from "react-router-dom";
import usePersist from "../../hooks/usePersist";
import Footer from "../footer";
import Navbar from "../navbar";

function Layout() {
  usePersist();
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
