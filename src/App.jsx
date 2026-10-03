import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLayout from "./components/layout/home-layout/HomeLayout";
import HomePage from "./pages/home-page/HomePage";
import ScrollTopButton from "./components/tools/scroll-top-button/ScrollTopButton";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import LoginModal from "./components/auth/login/LoginModal";

function App() {
  useEffect(() => {
    const data = localStorage.getItem("globetech-user");
    if (!data) return;
    const user = JSON.parse(data);
    if (Date.now() - user.loginTime > 30 * 60 * 1000 || !data.loginTime) {
      localStorage.removeItem("globetech-user");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ScrollTopButton />
    </>
  );
}

export default App;
