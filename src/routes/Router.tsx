import * as React from 'react'
import { Routes, Route } from 'react-router-dom';

const NotFound = React.lazy(() => import('@pages/NotFound'))
const Main = React.lazy(()=> import('@pages/Main'))
const Home = React.lazy(()=> import('@routes/Home'))
const Test123 = React.lazy(()=> import('@/routes/Test123'))
//! route:import

const Router:React.FC =()=> (
  <React.Fragment>
    <Routes>
      <Route element={<React.Suspense fallback={<div>Loading...</div>}><Main/></React.Suspense>}>
        <Route path="/home" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
        <Route path="/test123" element={<React.Suspense fallback={<div>Loading...</div>}><Test123/></React.Suspense>} />
//! route:component
        <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />
      </Route>
    </Routes>
  </React.Fragment>
)

export default Router