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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands')
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
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brand}`)

      },
      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/products`)
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)

      },
    ],
  },
]);

export default router;