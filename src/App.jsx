import ProductList from './Components/ProductList/ProductList';
import './App.css'
import fruit from './assets/fruit.png'

let products = [
  {
      pId:1,
      Name: 'Fresh Milk',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur veniam facilis ratione dolore aspernatur architecto at asperiores corporis. Architecto minus voluptatibus magni dicta ut modi? Ex a vitae dolorum ',
      isAvailable:true,
      image:fruit,
      price:12,
      stock:10
  },
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


function App() {

    return (<>
              <ProductList productList = {products}/>
        </>)
  
}

export default App;
