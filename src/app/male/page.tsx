
import Wraper from '../../../components/shared/wraper'
import { Iproducts } from "../interface"
import Image from "next/image"
import { urlForImage } from "../../../sanity/lib/image"
import Link from "next/link"
import { client } from '../../../sanity/lib/client'



const getMaleProductData = async() =>{
    const res = await client.fetch(`*[_type== 'product' && category->name=="Male"]{
      price,
      name,
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

export default async function MaleProducts() {
    const data:Iproducts[] = await getMaleProductData()
  return (
    <Wraper>
        <section className=" mt-8">
            <div className=" flex flex-wrap gap-6">
            {data.map((item, index)=>(
                      <div key={item.image}>
                      <Link
                      href={`/products/${item.slug.current}`}>
                      <div className="mt-16">
                      <Image src={urlForImage(item.image[0]).url()} alt={item.name} width={400} height={400} className="w-80 h-80"/>
                      <p className=" text-lg font-bold text-black">{item.name}</p>
                      <p className=" text-xl font-bold text-black">${item.price}</p>
                      </div>
                      </Link>
                      </div>
                      
                  ))}
            </div>
        </section>
    </Wraper>
  )
}

