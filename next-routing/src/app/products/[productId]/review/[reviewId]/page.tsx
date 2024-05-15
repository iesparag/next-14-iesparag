import { notFound } from "next/navigation";

export default function ReviewDetails( {params}:{params:{
    productId:string;
    reviewId:string;
}}){
    const {productId,reviewId} = params
    console.log('productId,reviewId: ', productId,reviewId);
    if(parseInt(reviewId) > 100){
       notFound()
    }
return (
<div>
  <h1>review {reviewId} of Product {productId}</h1>
</div>
) }
