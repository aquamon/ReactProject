import React, {  lazy , Suspense }  from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent  from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import ErrorComponent from "./components/Error";
import AboutComponent from "./components/About";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import ContactComponent from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileComponent from "./components/Profile";
import Shimmer from "./components/Shimmer";

//Dynamic Import
// Lazy loading
// Chunking
// Code Splitting
// On Demand Loading
// Dynamic Bundling

const InstamartComponent = lazy(()=> import('./components/Instamart'));
//This is a Promise so it will get time to get resolved.



const AppLayout = () => {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <ErrorComponent/>,
        children : [
            {
                path : '/',
                element : <BodyComponent/>,
            },
            {
                path : '/about',
                element : <AboutComponent/>,
                children : [{
                    path : 'profile',
                    element : <ProfileComponent/>
                }]
            },
            {
                path : '/contact',
                element : <ContactComponent/>,
            },
            {
                path : '/instamart',
                element :   <Suspense fallback={<Shimmer/>}>
                                <InstamartComponent/>
                            </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu/>,
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
//passing a react element inside the root.
//This render method, takes an object and modifies the DOM.
//Hence DOM is rendered with the values of this react element, which is nothing but a 
//JS object.

