import Link from "next/link";
import React from "react";

export default function Products (){
    const productId = 100
    return (
        <React.Fragment>
            <h1>Product List</h1>
        <div><Link href={`/products/1`}>Products 1</Link></div>
        <div><Link href={`/products/2`} replace>Products 2</Link></div>
        <div><Link href={`/products/${productId}`}>Products {productId}</Link></div>
        </React.Fragment>
    )
}