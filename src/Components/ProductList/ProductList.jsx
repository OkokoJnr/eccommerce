import ProductItem from "./ProductItem";
function ProductList({productList}){
    return productList.length == 0 ? <h2>No Available Products at the moment</h2> : (<>
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