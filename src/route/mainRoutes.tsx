import { createBrowserRouter } from "react-router-dom";
// import LayOut from "../components/common/LayOut";
import Layout from '../components/common/Layout'
import MainLayout from "../components/common/MainLayout";
import AddTask from "../pages/AddTask";
import ViewTasx from "../pages/ViewTask";
import Form from "../pages/Form";
import Register from "../pages/auth/Register";
// import Sigin from "../pages/auth/Sigin";
import Sigin from "../pages/auth/Sigin"

// import privateRouter from "./privateRouter"
// import MainLayout from '../components/common/MainLayout'
import AllSection from '../pages/MainPage/AllSection'
import ViewTask from '../pages/MainPage/ViewTasx'
import ProgresTasx from '../pages/MainPage/ProgresTasx'
import DoneTask from '../pages/MainPage/DoneTask'
import path from "path";
export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element:  <Register/>,
        children: [
            {
                index: true,
                element: <AddTask />,
            },
            {
                path: "/view",
                element: <ViewTask />,
            },
	
	 {
     path: "/Form",
     element: <Form/>,
 },
 ]}, 
 {
	path:"/register",
	element: <Register/>,
 },
 {
	path:"/sign-in",
	element: <Sigin/>
 },
 {
	path:"/main/",
	element: <MainLayout/>,
	children:[
		{
			index:true,
			element: <AllSection/>,
		},
		{
			path: "task",
			element: <ViewTasx/>,
		},
		{
	path: "viewtask",
	element: <ViewTask/>,
},
		{
		path: "progress",
		element: <ProgresTasx/>,	
		},
		{
			path: "done",
			element: <DoneTask/>,
		}
	]
	
 }
])
