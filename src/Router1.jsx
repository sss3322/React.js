// Router1.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Address from './Address';
import About from './About';
import Contact from './Contact';
import Navrouter from './Navrouter';
import Cart from './Axios/Cart';
import Product from './Axios/Home';

function Router1() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navrouter />
          <Product />
        </>
      ),
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Cart',
      element: <Cart />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
}

export default Router1;
