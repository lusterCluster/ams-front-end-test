import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root/Root";
import ProductList from "../pages/product/ProductList";
import Product from "../pages/product/Product";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/product-list",
                element: <ProductList/>
            },
            {
                path: "/product-details",
                element: <Product/>
            }
        ]
    }
])
export default router;