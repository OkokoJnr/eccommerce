import {useState} from 'react'
import ProductForm from "./ProductForm";

function CreateProduct({createProduct}){
    let [showForm, updatShowForm] = useState(false)



    function onCreateProduct(product){
        createProduct(product)
    }
    function toggleForm(){
        updatShowForm(true)
    }
    function cancelCreateProduct(){
        updatShowForm(false)
    }
    return(<>
    <div className="mx-auto" style={{ backgroundColor:'white', margin:'0.5px 0',borderRadius:'3px', padding:'10px 20px'}}>
                {!showForm && <button onClick={toggleForm} style={{border:'1px solid #ddd'}}>Create Product</button>}
                { showForm && <button style={{border:'1px solid #ddd', width:'100px'}} onClick={cancelCreateProduct}>X</button>}</div>
                {showForm && <ProductForm createProduct={onCreateProduct} cancelForm = {cancelCreateProduct}/>  }  
                </>)
}

export default CreateProduct;