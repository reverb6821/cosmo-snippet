import { useLocation } from 'react-router-dom'
import { get } from 'lodash'
import NotFound from '../views/NotFound'

const ErrorHandler = ({ children }) => {
  const location = useLocation()

  switch (get(location.state, 'errorStatusCode')) {
    case 404:
      return <NotFound />

      // ... cases for other types of errors

    default:
      return children
  }
}

export default ErrorHandler
