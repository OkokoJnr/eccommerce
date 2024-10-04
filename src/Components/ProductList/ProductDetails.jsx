function ProductDetails({product}){
    return(<>
            <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2" style={{marginRight:'5px'}}>${product.price}</h6>
                <button >-</button>
                <span style={{padding:'5px 20px', width:'70px'}}></span>
                <button >+</button>
                <span >{product.isAvailable?'Available':'Unavailable'}</span>
            </div>
    </>)
}

export default ProductDetails;
