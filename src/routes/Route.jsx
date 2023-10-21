import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import DisplayProducts from "../pages/DisplayProducts/DisplayProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/DisplayProducts/ProductDetails";
import UpdateProduct from "../pages/DisplayProducts/UpdateProduct";
import MyCart from "../pages/Register/MyCart/MyCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/brands')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/allproducts/:brand",
        element: <DisplayProducts></DisplayProducts>,
        loader: ({params}) => fetch(`https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/brands/${params.brand}`)

      },
      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch(`https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/products`)
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/products/${params.id}`)

      },
      {
        path: "/cart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/cart')

      },
    ],
  },
]);

export default router;