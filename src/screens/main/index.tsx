import { Outlet } from "solid-app-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div class="min-h-screen">
      <Navbar />
      <main class="container mx-auto px-2 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
