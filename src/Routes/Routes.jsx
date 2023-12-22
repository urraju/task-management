import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DashBoard from "../Components/Dashboard/Dashboard";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import TaskManagement from "../Components/Dashboard/TaskManagement";
import Update from "../Layout/Update";

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
      },
      {
        path : 'update/:id',
        element : <Update/>,
        loader : ({params}) => fetch(`http://localhost:5000/task/${params.id}`)
      }
    ]
  },
]);
export default router;
