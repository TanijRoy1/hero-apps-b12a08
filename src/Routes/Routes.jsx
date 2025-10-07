
import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps/Apps";
import Home from "../Pages/Home/Home";
import Installations from "../Pages/Installations/Installations";
import Root from "../Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "/installations",
                Component: Installations
            }
        ]
    }
])

export default router