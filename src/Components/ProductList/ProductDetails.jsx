import { useState } from "react";
import Button from "./Button";
import './productDetails.css'
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

let badgeClass = 'badge badge-margin-left'
badgeClass += product.isAvailable == true ? ' bg-success' : ' bg-danger'

    return(<>
            <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2" style={{marginRight:'5px'}}>${product.price}</h6>
                <Button eventHandler={decreamentHandler} disable={productCount == 0}>-</Button>
                <span style={{padding:'5px 20px', width:'70px'}}>{displayFormattedProductCount()}</span>
                <Button eventHandler={incrementHandler} disable={productCount==product.stock}>+</Button>
                <span className={badgeClass}>{product.isAvailable?'Available':'Unavailable'}</span>
            </div>
    </>)
}

export default ProductDetails;
