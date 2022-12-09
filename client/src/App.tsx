import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorHandler from './lib/errorHandler'

import Home from './views/Home'
import NotFound from './views/NotFound'

function App () {
  return (
        <Router>
            <ErrorHandler>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route element={<NotFound/>} />
                </Routes>
            </ErrorHandler>
        </Router>
  )
}

export default App
