import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DashBoard from "../Components/Dashboard/Dashboard";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import TaskManagement from "../Components/Dashboard/TaskManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children : [
      {
        path : 'taskmanagement',
        element : <TaskManagement/>
      }
    ]
  },
]);
export default router;
