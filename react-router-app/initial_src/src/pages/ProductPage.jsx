import { Link } from "react-router-dom";
import { products } from "../utils/products";

export default function ProductPage() {
  return (
    <>
      <h2>The Product Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
