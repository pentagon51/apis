import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const[products,setProducts]  = useState([])

useEffect(()=>{
  (async () => {
    const response = await axios.get('/api/products');
    console.log(response.data);
  
  })()
},[])

  return(<>
  
  <h1>Hello World</h1>
  <h2>NumberOfProducts : {products.length}</h2>
  
  </>
  )
}

export default App
