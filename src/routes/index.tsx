import App from "@/App";
import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <App/>
            }
        ]
    }
])

export default router