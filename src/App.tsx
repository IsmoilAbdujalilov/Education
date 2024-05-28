import Routes from "./Routes";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Error = lazy(() => import("./pages/Error"));
  const Videos = lazy(() => import("./pages/Videos"));
  const Profile = lazy(() => import("./pages/Profile"));
  const Courses = lazy(() => import("./pages/Courses"));
  const OneCourse = lazy(() => import("./pages/OneCourse"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          element: <Courses />,
          path: "/pages/courses",
        },
        {
          element: <OneCourse />,
          path: "/pages/courses/:id",
        },
        {
          element: <Videos />,
          path: "/pages/courses/video/:id",
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      element: <Profile />,
      path: "/pages/profile",
    },
  ]);

  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
