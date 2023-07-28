import { client } from "@/lib/sanityClient"
import Wraper from "../../../components/shared/wraper"
import { Iproducts } from "../interface"
import Image from "next/image"
import { urlForImage } from "../../../sanity/lib/image"
import Link from "next/link"
import { Image as sImage } from "sanity"




export const getProductData = async () =>{
    const res = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      subcat,
      image,
      price,
      slug {
        current
      },
  
    }`)
    return res
}




const AllProducts =async ()=> {
    const prodData:Iproducts[] = await getProductData()
    
  return (
    <Wraper>
        <section className=" mt-8">
            <div className=" flex flex-wrap gap-6">
           
            {prodData.map((product)=>(
                    <div 
                      key={product._id} className="mt-16">
                    <Link 
                     href={`/products/${product.slug.current}`}>
                      <Image src={urlForImage(product.image[0]).url()} alt={product.name} width={400} height={400} className="w-80 h-80"/>
                      <p className=" text-lg font-semibold mt-2">{product.name}</p>
                      <p className=" text-xl font-semibold">${product.price.toFixed(2)}</p>
                      </Link>
                      </div>  
                  ))}
                  
            </div>
            
        </section>
    </Wraper>
  )
}
export default AllProducts