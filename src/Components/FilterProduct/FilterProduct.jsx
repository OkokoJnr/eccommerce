import './filterproduct.css'
let FilterProduct = ({FilterValueSelected})=>{

    let  filterHandler= (event)=>{
        FilterValueSelected(event.target.value)
    }
    return (
        <>
            <div className='filter-area'>
                <select name="isAvailable" id="" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </div>
        </>
    )
}

export default FilterProduct;