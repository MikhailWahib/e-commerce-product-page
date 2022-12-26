import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductImages from './components/ProductImages'
import ProductDetails from './components/ProductDetails'

function App() {

  const [productCount, setProductCount] = useState(0)

  return (
    <div className="App">
      <NavBar
        productCount={productCount}
      />
      <main>
        <ProductImages />
        <ProductDetails
          productCount={productCount}
          setProductCount={setProductCount}
        />
      </main>
    </div>
  )
}

export default App
