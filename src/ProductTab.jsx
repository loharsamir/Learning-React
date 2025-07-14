import Product from "./Product.jsx"

function ProductTab(){
    return (
        <>
        <Product title="book" price={3000}/>
        <Product  title="copy" price={1000}/>
        <Product  title="pen" price={100}/>    
        </>
    )  
        
}
export default ProductTab;