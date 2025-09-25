import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import Exam from "../pages/Exam";
import Chatbot from "../pages/Chatbot";
import Leaderboard from "../pages/Leaderboard";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RegisterLayout from "../layout/RegisterLayout";
import AdminDashboard from "../component/AdminDashboard";
import AddMCQ from "../admin/AddMCQ";
import Results from "../admin/Results";
import Users from "../admin/Users";
import ManageMCQs from "../admin/ManageMCQs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/exam',
            element: <Exam></Exam>,
        },
        {
            path: '/chatbot',
            element: <Chatbot></Chatbot>,
        },
        {
            path: '/leaderboard',
            element: <Leaderboard></Leaderboard>,
        }
    ]
  },
  {
          path: '/log',
          element: <RegisterLayout></RegisterLayout>,
          children: [
            {
              path: '/log/login',
              element: <Login></Login>,
            },
            {
              path: '/log/signup',
              element: <Signup></Signup>,
            }
          ],
        },
        {
          path: '/admin',
          element: <AdminDashboard></AdminDashboard>,
          children: [
            {
                path: '/admin/add-mcq',
                element: <AddMCQ></AddMCQ>,
            },
            {
                path: '/admin/results',
                element: <Results></Results>,
            },
            {
                path: '/admin/users',
                element: <Users></Users>
            },
            {
                path: '/admin/manage',
                element: <ManageMCQs></ManageMCQs>
            }
          ]
        },
        {
          path: '/*',
          element: <Error></Error>,
        }
]);

export default router;