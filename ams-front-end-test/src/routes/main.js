import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root/Root";

const PATHS = {
    root: "/"
}

const router = createBrowserRouter([
    {
        path: PATHS.root,
        element: <Root/>,
        children: [
            {

            }
        ]
    }
])
export default router;