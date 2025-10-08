
import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps/Apps";
import Home from "../Pages/Home/Home";
import Installations from "../Pages/Installations/Installations";
import Root from "../Root/Root";
import AppDetails from "../Pages/AppDetails/AppDetails";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path: "/installations",
                Component: Installations
            },
            {
                path: "/apps/:Appid",
                Component: AppDetails,
            },
            {
                path: "*",
                Component: PageNotFound
            }
        ]
    }
])

export default router