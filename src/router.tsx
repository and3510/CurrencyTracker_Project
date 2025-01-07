import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home';
import { Coin } from './pages/coin';
import { Notfound } from './pages/notfould';
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/coin/:cripto",
                element: <Coin/>
            },
            {
                path: "*",
                element: <Notfound/>
            }
        ]
    }
])

export { router }