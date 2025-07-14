import "./Product.css"
import Price from "./Price.jsx";
function Product ({title,price}){
    return (
        <div className="Product">
            <p>{title}</p>
            <p>Description</p>
            <p>{price}</p>
            {/* <Price/> */}
        </div>
    )
}
export default Product;