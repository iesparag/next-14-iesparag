import { Metadata } from "next"

interface props {
  params :{
    productId : string
  }
}

export async function generateMetadata ({params}:props):Promise<Metadata> {
  const title = await new Promise(resolve => {
    setTimeout(()=> {
      resolve(`product dynamic title ${params.productId}`)
    },1000)
  })
        return {
          title : `${title}`
        }
}

export default function ProductDetails({params}:props){
console.log(params,"1234")
  return (
    <div>
        <h1>Product Details Page {params?.productId}</h1>
    </div>
  )
}