import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ProductDetails from './Pages/ProductDetails'
import Homepage from './Pages/Homepage'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: '/productDetails/:id',
      element: <ProductDetails />
    }
  ])
  return <RouterProvider router={ routes } />
}
export default App
