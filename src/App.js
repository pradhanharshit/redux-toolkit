import './App.css';
import Product from './Product';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    ))

    return(
      <div className="App">
        <RouterProvider router={router} />
      </div>
    )
  
}

export default App;
