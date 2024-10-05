import { useState } from 'react';
import axios from 'axios'
import ProductList from './Components/ProductList/ProductList';
import FilterProduct from './Components/FilterProduct/FilterProduct';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import './App.css'
import fruit from './assets/fruit.png'

let products = [
  
  {
      pId:2,
      Name: 'Cottage Cheese',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur veniam facilis ratione dolore aspernatur architecto at asperiores corporis. Architecto minus voluptatibus magni dicta ut modi? Ex a vitae dolorum ',
      isAvailable:false,
      image:fruit,
      price:120,
      stock:6
  },{
      pId:3,
      Name: 'Brocoli',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur veniam facilis ratione dolore aspernatur architecto at asperiores corporis. Architecto minus voluptatibus magni dicta ut modi? Ex a vitae dolorum ',
      isAvailable:true,
      image:fruit,
      price:15,
      stock:8
  },{
      pId:4,
      Name: 'Oranges',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur veniam facilis ratione dolore aspernatur architecto at asperiores corporis. Architecto minus voluptatibus magni dicta ut modi? Ex a vitae dolorum ',
      isAvailable:true,
      image:fruit,
      price:20,
      stock:5
  }
]
const fburl = 'https://eccommerce-prodt-default-rtdb.firebaseio.com/product.json'

function App() {
  let [productList, updateProductList] = useState(products)
  let[filterTextValue, updateFilterTextValue] = useState('')

  
function onFilterValueSelected(filterValue){
  updateFilterTextValue(filterValue)
}

let FilterProductList = productList.filter((product)=>{
  if(filterTextValue == 'available'){
      return product.isAvailable == true
  }else if(filterTextValue === 'unavailable'){
      return product.isAvailable == false
  }else{
      return product
  }
})

function onCreateProduct(newProduct){
  updateProductList([newProduct, ...productList])
  // fetch(fburl, {
  //   method:'POST',
  //   body: JSON.stringify(newProduct),
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   }
  // })
  // .then((resp)=>{
  //   console.log('consoling response')
  //   console.log(resp)
  // })

  
axios.post(fburl, newProduct)
.then((response)=>{
  console.log(response.data)
})
}
    return (<>
              <CreateProduct createProduct={onCreateProduct}/>
              <FilterProduct FilterValueSelected = {onFilterValueSelected}/>
              <ProductList productList = {FilterProductList} />
        </>)
  
}

export default App;
