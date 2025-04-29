import express from "express";
const app = express();


app.get('/api/products',(req,res)=>{
    const products = [
        { id: 101, name: "Laptop", price: 899 },
        { id: 102, name: "Smartphone", price: 699 },
        { id: 103, name: "Wireless Mouse", price: 49 },
        { id: 104, name: "Mechanical Keyboard", price: 129 },
        { id: 105, name: "Smartwatch", price: 199 },
        { id: 106, name: "Bluetooth Speaker", price: 79 }
      ];

      // http://localhost:3000/api/products?search=Smartwatch

if (req.query.search) {
const FilterProducts =  products.filter(product=> product.name.includes(req.query.search))
res.send(FilterProducts);
return;
} 
  


      setTimeout(() => {
        res.send(products);
      }, 3000);
      
      
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});