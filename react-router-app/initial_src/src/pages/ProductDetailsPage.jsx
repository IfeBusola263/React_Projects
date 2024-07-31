import { Link, useParams } from "react-router-dom"

export default function ProductDetails(){
    const param = useParams();
    return(
        <>
            <h3>Product Details</h3>
            <p>Product {param.productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}