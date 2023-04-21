import React, { useState, useEffect, Suspense } from "react";
import {Link} from '@reach/router';
import ProductDetails from "./productdetails";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    return await (await fetch("https://dummyjson.com/products")).json();
  }

  useEffect(() => {
    getProducts().then(({ products }) => {
      setProducts(products);
    }, console.error);
  }, []);

  return (
    <>
      <h2>Total Products : {products.length}</h2>
      <table>
        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                    <Link to={`/details/${p.id}`}>
                    {p.title}
                    </Link>
                </td>

                
                <td>{p.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>"NA"</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

export default Products;
