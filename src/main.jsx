import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/authentication/Login";
import AuthProvider from "./providers/AuthProvider";
import SignUp from "./pages/authentication/SignUp";
import Home from "./pages/home/Home";
import AddJewelry from "./pages/addJewelry/AddJewelry";
import PrivateRoute from "./routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllJewelry from "./pages/allJewelry/AllJewelry";
import Jewelry from "./pages/allJewelry/Jewelry";
import MyJewelrys from "./pages/myJewelry/MyJewelrys";
import UpdateJewelry from "./pages/myJewelry/UpdateJewelry";
import ErrorPage from "./pages/errorPage/ErrorPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allJewelry",
        element: <AllJewelry />,
      },
      {
        path: "/jewelry/:id",
        element: <Jewelry />,
      },
      {
        path: "/addJewelry",
        element: (
          <PrivateRoute>
            <AddJewelry />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJewelry",
        element: (
          <PrivateRoute>
            <MyJewelrys />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJewelry/:id",
        element: <UpdateJewelry />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/api/jewelrys/${params.id}`
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
);
