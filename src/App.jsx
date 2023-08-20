import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ProductDetails from './Pages/ProductDetails'
import Homepage from './Pages/Homepage'
import Modal from './components/modal'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: '/productDetails/:id',
      element: <ProductDetails />
    },
    {
      path: "/Modal",
      element: <Modal />
    }
  ])
  return <RouterProvider router={ routes } />
}
export default App
