function ProductForm(){


    return(<>
        <div className="form-container">
        <form action="" className="row g-3">
        
        <div className="col-md-6">
            <label htmlFor="name">Product Name</label>
            <input type="text" 
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
/>
        </div>
        <div className="col-md-6">
            <label htmlFor="price"> Product Price</label>
            <input type="text"
                    min={'0.01'} step={'0.01'}
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                     />
        </div>
        <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input type="text"
                    className="form-control" 
                    id="description"
                    placeholder="Product Description"
                    />
        </div>
        <div className="form-check form-switch">
            <input type="checkbox" 
                    className="form-check-input" 
                    role="switch" id="isAvailable" 
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
            
                     />
        </div>
        <div className="form-group">
            <label htmlFor="select-image">Select Product Image</label>
            <input type="file" 
                    className="form-control" 
                    id="select-image" 
                    />
        </div>
        <button className="btn btn-primary" type="submit">Add Product</button>
    </form>
        </div>
    </>)
}

export default ProductForm;