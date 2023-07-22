
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Home from "./Pages/Home/Home";
import MyCollege from "./Pages/mycollege/MyCollege";
import Colleges from "./Pages/Colleges/Colleges";
import Admission from './Pages/admission/Admission';
import NotFound from "./Pages/404Page/NotFound";
// import NotFound from "./Pages/404Page/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/colleges",
            element: <Colleges></Colleges>
        },
        {
            path:"/admission",
            element: <Admission></Admission>
        },
        {
            path:"/mycollege",
            element: <MyCollege></MyCollege>
        },
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;