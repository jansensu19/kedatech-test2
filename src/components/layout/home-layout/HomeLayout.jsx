import { Outlet } from "react-router-dom";
import Navbar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import './HomeLayout.scss'

export default function HomeLayout() {

  return (
    <div className="home-layout-container">

      <div className="home-layout-content">
        <div className="nav-bar">
          <Navbar />
        </div>

        <main className="content-container">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
