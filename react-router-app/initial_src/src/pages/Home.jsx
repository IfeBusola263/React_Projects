import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>My Home Page</h2>
      <p>Go to the <Link to='/products'>Products Page</Link></p>
    </>
  );
}
