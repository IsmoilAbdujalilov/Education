import { Copyright } from "./components";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layouts";

const Routes = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default Routes;
