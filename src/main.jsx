import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Home, MovieDeatile } from './pages'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "", element: <Home /> },
      { path: "movie/:movieId", element: <MovieDeatile /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
