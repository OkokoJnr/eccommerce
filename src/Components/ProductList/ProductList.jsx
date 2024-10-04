import ProductItem from "./ProductItem";
function ProductList({productList}){
    return(<>
            {
      productList.map((product)=>{
        return (
          <ProductItem product={product}/>
        )
      })
    }
    </>)
}

export default ProductList;