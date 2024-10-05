import ProductDetails from "./ProductDetails";
import './ProductItem.css'
function ProductItem ({product}){
    return (
        <>
            <li className="item-list list-group-item " style={{backgroundColor:product.isAvailable?'white':'#dedede'}}>
            <div className="list-container media align-items-lg-center flex-column flex-lg-row p-1 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{product.Name}</h5>
                    <p className="font-italic text-uted mb-0 small">{product.desc}</p>
                    <ProductDetails product = {product}/>
                </div><img src={product.image} width={'200'} alt="Generic placeholder image" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li> 
        </>
    )
}

export default ProductItem;