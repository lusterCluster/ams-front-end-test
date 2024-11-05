import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root/Root";
import ProductList from "../pages/product/ProductList";
import Product from "../pages/product/Product";
import Home from "../pages/home/Home";




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
            },
            {
                path: "/",
                element: <Home/>
            },
        ]
    }
])
export default router;