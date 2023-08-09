import { Iproducts } from "@/app/interface"
import Wraper from "../../../../components/shared/wraper"
import Image from "next/image"
import Sizes from "../../../../components/sizes"
import Quantity from "../../../../components/Quantity"
import { Button } from "../../../../components/ui/button"
import { BiCart } from "react-icons/bi"
import { client } from "../../../../sanity/lib/client"
import { urlForImage } from "../../../../sanity/lib/image"

type Props = {
    params:{
        slug:string
    }
}
const getProductDetails = async ({params}:Props) =>{
    const res = await client.fetch(`*[_type == "product" && slug.current == "${params.slug}"][0]{
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
 




export default async function ProdDetails({params}:Props) {
    const data:Iproducts = await getProductDetails({params});
    
  return (
    <section className=" bg-gray-100">
    <Wraper>
    <div className=" flex flex-wrap py-10 mt-12">
            <div className=" flex justify-between gap-6">

                    {/* small image */}
        {/* <div className="flex flex-col gap-4">
            <div className="  w-14 h-14">
            <Image src={urlForImage(data.image[0]).url()} alt={data.name} width={70} height={70}/>
            </div>

            <div className=" w-14 h-14">
            <Image src={urlForImage(data.image[1]).url()} alt={data.name} width={70} height={70}/>
            </div>

            <div className=" w-14 h-14">
            <Image src={urlForImage(data.image[2]).url()} alt={data.name} width={70} height={70}/>
            </div>

            <div className="  w-14 h-14">
            <Image src={urlForImage(data.image[3]).url()} alt={data.name} width={70} height={70}/>
            </div>

        </div> */}

                    {/* large image */}
            <div>
                <Image src={urlForImage(data.image[0]).url()} alt={data.name} width={600} height={600}/>
            </div>
            <div className=" mt-12">
                <div>
                    <h1 className="text-3xl font-normal leading-[33px] text-black max-w-xs">{data.name}</h1>
                    <h2 className=" text-lg font-semibold text-gray-500 mt-1">{data.subcat}</h2>
                </div>
                <div className="mt-8">
                <h3 className="text-md font-semibold uppercase tracking-wide">Select Sizes</h3>
                </div>
                <div className=" mt-8">
                <Sizes/>
                </div>
                <div className=" mt-8">
                <Quantity/>
                </div>
                <div className=" flex gap-2  mt-6">
                    <div className="">
                <Button className='flex px-3 py-2 border-[4px] bg-black text-white font-normal border-slate-900 border-spacing-1'>
                    <div className=" flex gap-3 items-center">
                        <BiCart size={25}/>
                        <span className=' flex gap-1 space-x-4'>
                        <span className=" text-sm">Add to Cart</span>
                        </span>
                    </div>
                </Button>
                    </div>
                        <div className="text-lg font-bold uppercase tracking-wide px-3 py-2">
                        $ {data.price.toFixed(2)}
                        </div>
                </div>

            </div>

        </div>
        
    </div>
    <div className=" relative bg-white mt-6 px-6 py-12 ">
    <div className="absolute inset-0 overflow-hidden text-[5rem] sm:text-8xl font-bold tracking-widest text-gray-300/70 -z-10">
              Overwieve
            </div>
        <h2 className=" text-xl font-bold ">Product Information</h2>
        <div className="  bg-black h-[1px]"></div>

        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-800 font-bold text-lg mb-2 sm:mb-0">PRODUCT DETAILS</h1>
        <p className="sm:w-3/5 leading-4 text-base tracking-wider sm:pl-10 pl-0">Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Repudiandae molestias totam 
        pariatur! Illo nesciunt cumque dicta consequuntur.
         Odio debitis voluptas eum tempore, error iste ad eaque,
          harum praesentium, asperiores sequi!</p>
      </div>


      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">

        <h1 className="sm:w-2/5 text-gray-800 font-bold text-lg mb-2 sm:mb-0">PRODUCT CARE</h1>
        <div>
        <li className=" leading-4 text-base font-semibold tracking-wider sm:pl-10 pl-0">
        Hand wash using cold water.
        </li>
        <li className="leading-4 text-base font-semibold tracking-wider  sm:pl-10 pl-0">
        Do not using bleach.
        </li>
        <li className="leading-4 text-base font-semibold tracking-wider sm:pl-10 pl-0">
        Hang it to dry.
        </li>
        <li className=" leading-4 text-base font-semibold tracking-wider sm:pl-10 pl-0">
        Iron on low temperature.
        </li>
        </div>
         
        
      </div>

            



    </div>
    </Wraper>
    </section>
  )
}

export async function generateStaticParams() {
    const query = `*[_type == "category"] {
        slug {
        current
        }
    }`;
    const res:any = await client.fetch(query);
  
    return res.map((category:any) => ({
      slug: category.slug.current,
    }));
  }

