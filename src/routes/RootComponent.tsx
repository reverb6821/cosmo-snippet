import * as React from 'react'
import { Routes, Route } from 'react-router-dom';

const NotFound = React.lazy(() => import('@pages/NotFound'))
const Main = React.lazy(()=> import('@pages/Main'))
const Home = React.lazy(()=> import('@routes/Home'))
//! route:import

const RootComponent:React.FC =()=> (
  <React.Fragment>
    <Routes>
      <Route element={<React.Suspense fallback={<div>Loading...</div>}><Main/></React.Suspense>}>
        <Route path="/home" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
//! route:component
        <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />
      </Route>
    </Routes>
  </React.Fragment>
)

export default RootComponent