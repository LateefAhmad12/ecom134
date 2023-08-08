
import Wraper from '../../../components/shared/wraper'
import { Iproducts } from "../interface"
import Image from "next/image"
import { urlForImage } from "../../../sanity/lib/image"
import Link from "next/link"
import { client } from '../../../sanity/lib/client'



export const getProductData = async() =>{
    const res = await client.fetch(`*[_type== 'product' && category->name=="Female"]{
      price,
      image,
      _id,
      title,
      slug {
        current
      },
      category -> {
        name
      }
    }`)
    return res
}

export default async function FemaleProducts() {
    const data:Iproducts[] = await getProductData()
  return (
    <Wraper>
        <section className=" mt-8">
            <div className=" flex flex-wrap gap-6">
            {data.map((item)=>(
                    <Link key={item._id} 
                    href={`/products/${item.slug.current}`}>
                      <div className="mt-16">
                      <Image src={urlForImage(item.image[0]).url()} alt={item.name} width={400} height={400} className="w-80 h-80"/>
                      <p className=" text-lg font-bold text-black">{item.name}</p>
                      <p className=" text-xl font-bold text-black">${item.price}</p>
                      </div>
                      </Link>
                      
                  ))}
            </div>
        </section>
    </Wraper>
  )
}

