import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App  from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Catalog } from './pages/Catalog';
import { News } from './pages/News';
import {SignUp} from './pages/SignUp';
import { Reviews } from './pages/Reviews';
import { Stock } from './pages/Stock';
import { Delivery } from './pages/Delivery';
import { Questions } from './pages/Questions';
import { Feedback } from './pages/Feedback';
import { Contacts } from './pages/Contacts';
import { Products } from './pages/Products';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { User } from './pages/User';
import { CurrentProduct } from './pages/CurrentProduct';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {                    
        path: "home",                          
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "catalog",
        element: <Catalog />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "reviews",
        element: <Reviews />
      },
      {
        path: "stock",
        element: <Stock />
      },
      {
        path: "delivery",
        element: <Delivery />
      },
      {
        path: "questions",
        element: <Questions />
      },
      {
        path: "feedback",
        element: <Feedback />
      },
      {
        path: "contacts",
        element: <Contacts />
      }, 
      {
        path: "products",
        element: <Products />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "product/:idOfProduct",
         element: <CurrentProduct />
       },
       {
        path: "cart",
        element: <Cart />
       },
       {
        path: "favorites",
        element: <Favorites />
       },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

