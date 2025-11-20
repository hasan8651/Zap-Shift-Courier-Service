import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import NotFound from "../pages/NotFound";
import LoadingSpinner from "../components/LoadingSpinner";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    errorElement:<NotFound/>,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
        {
            path:"/",
            element:<Home/>
        }, 
         {
        path: '/rider',
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
        {
        path: '/send-parcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
        {
            path: "/coverage",
            element:<Coverage/> , 
            loader: () => fetch('/serviceCenters.json').then(res => res.json())
        }
    ]
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      {
        path: '/login',
        element:<Login/>,
      },
      {
        path: '/register',
        element:<Register/>,
      }
    ]
  }, 
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard/my-parcels', 
        element:<MyParcels/>,
      },
      {
        path: '/dashboard/payment/:parcelId',
        element:<Payment/>
      }, 
      {
        path: '/dashboard/payment-success',
        element:<PaymentSuccess/>
      }, 
      {
        path: '/dashboard/payment-cancelled', 
        element:<PaymentCancelled/>
      }
    ]
  }
]);
