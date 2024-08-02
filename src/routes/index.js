// import packages
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginPath, homePagePath } from "../routePaths";
import LoginPage from "../pages/LoginPage";

// const Login = lazy(() => import("../pages/login"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<h3>PageLoading...</h3>}>
      <BrowserRouter>
        <Routes>
          <Route path={homePagePath} element={<DashboardPage />}></Route>
          <Route path={loginPath} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
