import Routes from "./Routes";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Error = lazy(() => import("./pages/Error"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
