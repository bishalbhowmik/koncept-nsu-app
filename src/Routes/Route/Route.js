import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import CourseOfferList from "../../Pages/CourseOfferList/CourseOfferList";
import FacultyPredictor from "../../Pages/FacultyPredictor/FacultyPredictor";
import BasicTable from "../../components/Loading/BasicTable";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'courseofferlist',
                element: <CourseOfferList></CourseOfferList>
            },
            {
                path:'/facultypredictor',
                element: <FacultyPredictor></FacultyPredictor>
            }

        ]
           
        
    }
])