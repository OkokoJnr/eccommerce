import { useState } from "react";

function ProductDetails({product}){
    let[productCount, updateCount] = useState(0)

    function displayFormattedProductCount(){
        return productCount > 0 ? productCount : 'Zero'
        
    }
    
    function decreamentHandler(){
        //decrease product count
        updateCount(--productCount)
    }
    
    function incrementHandler(){    
        productCount < 0 ? productCount = 0 : productCount = productCount
        updateCount(++productCount)
    }
    return(<>
            <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2" style={{marginRight:'5px'}}>${product.price}</h6>
                <button onClick={decreamentHandler}>-</button>
                <span style={{padding:'5px 20px', width:'70px'}}>{displayFormattedProductCount()}</span>
                <button onClick={incrementHandler}>+</button>
                <span >{product.isAvailable?'Available':'Unavailable'}</span>
            </div>
    </>)
}

export default ProductDetails;
