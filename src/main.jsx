import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider } from "react-router-dom";
import { router } from './routes';
import SkeletonLoader from './components/Skeleton';
import "@fontsource/montserrat";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Suspense fallback={<SkeletonLoader />} > */}
      <RouterProvider router={router} />
    {/* </Suspense> */}
  </StrictMode>,
)
