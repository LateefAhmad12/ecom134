"use client"
import React, { Component } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Wraper from "./shared/wraper";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import {Iproducts} from "@/app/interface"
import { urlForImage } from "../sanity/lib/image";
import Slider from "react-slick";
import Link from "next/link";





export const getProductData = async() =>{
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
};


export default async function Products() {
  const data:Iproducts[] = await getProductData()

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
  
      <section className=' mt-14 mb-2'>

<Wraper>
    
        <h2 className=' text-center text-lg text-blue-700 font-semibold font-sans'>Products</h2>
        <h3 className=' text-center text-3xl text-black font-bold
        capitalize tracking-wide font-serif mt-6'>
        Check What We Have</h3>
    
  <div className=" mt-8">
    <Slider {...settings}>

    
    {data.map((item)=> (
              <Link key={item._id}
              href={`/products/${item.slug.current}`}>
              <div >
              <Image src={urlForImage(item.image[0]).url()} alt={item.name} width={400} height={400} className=" w-80 h-80 hover:w-[22rem] hover:scale-y-110 hover:scale-x-110 duration-300"/>
              <p className=" text-lg font-semibold mt-3">{item.name}</p>
              <p className=" text-xl font-semibold">${item.price.toFixed(2)}</p>
              </div>
              </Link>
      
      
          ))}
          
    </Slider>
    </div>

</Wraper>
</section>
    
  
  
    )
}




