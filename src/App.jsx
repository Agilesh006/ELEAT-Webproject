import React from 'react'
import Header from './header'
import ProductDetail from './ProductDetail'
import { Route, Routes,useLocation } from 'react-router-dom'
import CartPage from './CartPage'

const App = () => {
  const location = useLocation();
  return (
    <div>
      {/* <Header/> */}
      {location.pathname === '/'&& <Header/>}
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="products.id" element={<Header />} /> */}
          <Route path="/cart" element={<CartPage />} />
        </Routes> 
    
    </div>
  )
}

export default App

