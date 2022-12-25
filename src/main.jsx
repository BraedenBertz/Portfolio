import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import ErrorPage from './components/ErrorPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TimeSeries from './components/Dimensional Analysis Project Page/TimeSeries'
import TradingPlatform from './components/TradingPlatform/TradingPlatform'
import PortfolioWebsite from './components/PortfolioWebsite/PortfolioWebsite'
import Fractals from './components/Fractals/Fractals'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/TimeSeriesAnalysis",
    element: <TimeSeries />,
  },
  {
    path: "projects/TradingPlatform",
    element: <TradingPlatform />,
  },
  {
    path: "projects/PortfolioWebsite",
    element: <PortfolioWebsite />,
  },
  {
    path: "projects/Fractals",
    element: <Fractals />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)