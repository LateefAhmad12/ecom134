import { client } from "@/lib/sanityClient"
import Wraper from "../../../components/shared/wraper"
import { Iproducts } from "../interface"
import Image from "next/image"
import { urlForImage } from "../../../sanity/lib/image"



export const getProductData = async() =>{
    const res = await client.fetch(`*[_type== 'product']{
      price,
      image,
      _id,
      title,
      category -> {
        name
      }
    }`)
    return res
}

export default async function AllProducts() {
    const data:Iproducts[] = await getProductData()
    
  return (
    <Wraper>
        <section className=" mt-8">
            <div className=" flex flex-wrap gap-6">
            {data.map((item)=>(
                    
                      <div key={item._id} className="mt-16">
                      <Image src={urlForImage(item.image).url()} alt={item.title} width={400} height={400} className=" w-80 h-80"/>
                      <p className=" text-lg font-bold text-black">{item.title}</p>
                      <p className=" text-xl font-bold text-black">${item.price}</p>
                      </div>
                      
                  ))}
            </div>
        </section>
    </Wraper>
  )
}
