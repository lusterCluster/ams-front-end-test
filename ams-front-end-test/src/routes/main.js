import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root/Root";
import ProductList from "../pages/product/ProductList";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/product-list",
                element: <ProductList/>
            }
        ]
    }
])
export default router;