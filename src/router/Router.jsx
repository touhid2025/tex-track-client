import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import AdminDashboard from "../component/AdminDashboard";
import AddMCQ from "../admin/AddMCQ";
import Results from "../admin/Results";
import Users from "../admin/Users";
import ManageMCQs from "../admin/ManageMCQs";
import Contact from "../pages/Contact";
import AboutPage from "../pages/AboutPage";
import Features from "../pages/Features";
import RegisterPage from "../pages/RegisterPage";


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
            path: '/features',
            element: <Features></Features>,
        },
        
        {
            path: '/about',
            element: <AboutPage></AboutPage>,
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        },
        {
              path: '/login',
              element: <Login></Login>,
        },
        {
              path: '/signup',
              element: <RegisterPage></RegisterPage>,
        }
    ]
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