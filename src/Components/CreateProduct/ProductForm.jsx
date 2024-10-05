import { useState } from "react"

function ProductForm({createProduct, cancelForm}){
    let [Name, updateName] = useState('')
    let [price, updatePrice] = useState('')
    let [description, updateDesc] = useState('')
    let [image, updateImage] = useState('')
    let [availability, updateAvailability] = useState(false)
    let [stock, updateStock] = useState('')

    //Handle name input
    let nameInputHandler = (event)=>{
        updateName(event.target.value)
    }
    //Handle price input
    let priceInputHandler = (event)=>{
        updatePrice(event.target.value)
    }
    //product availability Handler
    let availabilityInputHandler = (event)=>{
        updateAvailability(event.target.checked)
    }

    //Product description Handler
    let descriptionInputHandler = (event)=>{
        updateDesc(event.target.value)
    }

    let stockInputHandler = (event)=>{
        updateStock(event.target.value)
    }
    
    let imageInputHandler = (event)=>{
        updateImage(event.target.value)
    }

    function createNewProduct(event){
        event.preventDefault();
        let newProduct = {
        
            Name: Name,
            desc: description,
            isAvailable:Boolean(availability),
            image:image,
            price: Number(price)
        }

        updateName('')
        updatePrice('')
        updateDesc('')
        updateAvailability(false)
        updateStock('')
        updateImage('')
        createProduct(newProduct)
        cancelForm()
    }

    return(<>
        <div className="form-container">
        <form action="" className="row g-3" onSubmit={createNewProduct}>
        
        <div className="col-md-6">
            <label htmlFor="name">Product Name</label>
            <input type="text" 
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    onChange={nameInputHandler}
                    value={Name}
/>
        </div>
        <div className="col-md-6">
            <label htmlFor="price"> Product Price</label>
            <input type="text"
                    min={'0.01'} step={'0.01'}
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    onChange={priceInputHandler}
                    value={price}
                     />
        </div>
        <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input type="text"
                    className="form-control" 
                    id="description"
                    placeholder="Product Description"
                    onChange={descriptionInputHandler}
                    value={description}
                    />
        </div>
        <div className="form-check form-switch">
            <input type="checkbox" 
                    className="form-check-input" 
                    role="switch" id="isAvailable" 
                    onChange={availabilityInputHandler}
                    value={availability}
/>
            <label htmlFor="isAvailable" className="form-check-label">Is Product available in stock</label>
        </div>
        <div>
        <label htmlFor="stock"> Product Stock</label>
            <input type= 'number'
                    min={'0.01'} step={'0.01'}
                    className="form-control"
                    id="stock"
                    placeholder="Product Stock"
                    onChange={stockInputHandler}
                    value={stock}
                     />
        </div>
        <div className="form-group">
            <label htmlFor="select-image">Select Product Image</label>
            <input type="file" 
                    className="form-control" 
                    id="select-image" 
                    onChange={imageInputHandler}
                    value={image}
                    />
        </div>
        <button className="btn btn-primary" type="submit">Add Product</button>
    </form>
        </div>
    </>)
}

export default ProductForm;