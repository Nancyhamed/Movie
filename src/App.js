import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import WatchList from './components/WatchList/WatchList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Series from './components/Series/Series';
import Moviedetails from './components/Moviedetails/Moviedetails';


export default function App() 
{

  let routes=createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'movies',element:<Movies/>,children:[
        {path:':movieid',element:<Moviedetails/>}
      ]},
      {path:'watchlist',element:<WatchList/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'series',element:<Series/>},
    ]
  }])

  return (
    <>
      <div className='App'>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </>
  )
}



