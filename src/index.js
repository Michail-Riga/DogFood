import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { SignIn } from './pages/Auth';
import { Catalog } from './pages/Catalog';
import { News } from './pages/News';
import {SignUp} from './pages/SignUp';
import { Reviews } from './pages/Reviews';
import { Stock } from './pages/Stock';
import { Delivery } from './pages/Delivery';
import { Questions } from './pages/Questions';
import { Feedback } from './pages/Feedback';
import { Contacts } from './pages/Contacts';
import { Card1 } from './pages/Card1';
import { Card2 } from './pages/Card2';
import { Card3 } from './pages/Card3';
import { Card4 } from './pages/Card4';
import { Card5 } from './pages/Card5';
import { Generalcard } from './pages/Generalcard';
import { Products } from './pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {                    
        path: "home",                          
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "stock",
        element: <Stock />,
      },
      {
        path: "delivery",
        element: <Delivery />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "card1",
        element: <Card1 />,
      },
      {
        path: "card2",
        element: <Card2 />,
      },
      {
        path: "card3",
        element: <Card3 />,
      },
      {
        path: "card4",
        element: <Card4 />,
      },
      {
        path: "card5",
        element: <Card5 />,
      },
      {
        path: "generalcard",
        element: <Generalcard />,
      }, 
      {
        path: "products",
        element: <Products />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

