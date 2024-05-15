import React from "react"
import Link from "next/link"

export const metadata = {
   title : "this is my blog page metadata"
}
export default function Blog (){
  
    return (
        <React.Fragment>
            <Link href="/">Home</Link>
        <h1>My Blog</h1>
        </React.Fragment>
    )
}