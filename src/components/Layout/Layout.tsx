import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

function Layout() {
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
