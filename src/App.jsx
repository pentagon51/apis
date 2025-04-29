import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[products,setProducts]  = useState([])
  return(<>
  
  <h1>Hello World</h1>
  <h2>NumberOfProducts : {products.length}</h2>
  
  </>
  )
}

export default App
