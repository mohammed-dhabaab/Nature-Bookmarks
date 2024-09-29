import Desert from "./components/Desert";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage"
import {
    createBrowserRouter,
    Outlet,
    ScrollRestoration,
} from "react-router-dom";
import Tundra from "./components/Tundra";
import CoralReef from "./components/CoralReef";
import Grassland from "./components/Grassland";



const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
            <Navbar />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/desert",
                element: <Desert />,
            },
            {
                path: "/tundra",
                element: <Tundra />,
            },
            {
                path: "/coral-reef",
                element: <CoralReef />,
            },
            {
                path: "/grassland",
                element: <Grassland />,
            }
        ],
    },
]);

export default router