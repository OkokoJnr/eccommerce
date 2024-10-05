import ProductForm from "./ProductForm";

function CreateProduct({createProduct}){


    function onCreateProduct(product){
        createProduct(product)
    }

    return(<>
            <ProductForm createProduct={onCreateProduct}/>
    </>)
}

export default CreateProduct;