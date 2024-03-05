import * as React from 'react'
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(()=> import('@/routes/Home/Home.tsx')) 
// ROUTES IMPORT


const Container:React.FC =()=> {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<Home />} />
// COMPONENTS ROUTES
      </Routes>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Container
