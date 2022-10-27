import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses"; 
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import CourseDetails from "../../components/CourseDetails/CourseDetails";


import Main from '../../layout/Main/Main'
import Category from "../../components/Category/Category";
import Profile from "../../components/Profile/Profile/Profile";
import UpdateProfile from "../../components/Profile/UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checkout from "../../components/Checkout/Checkout";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://basic-it-server.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://basic-it-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://basic-it-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://basic-it-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://basic-it-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/update_profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])