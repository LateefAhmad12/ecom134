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






export default async function Products() {

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



  const data:Iproducts[] = await getProductData()
  return (
    
    
      <section className=' mt-14 mb-2'>

        <Wraper>
            
                <h2 className=' text-center text-lg text-blue-700 font-semibold font-sans'>Products</h2>
                <h3 className=' text-center text-3xl text-black font-bold
                capitalize tracking-wide font-serif mt-6'>
                Check What We Have</h3>
            
          <div className=" mt-8">
            <Slider {...settings}>
            {data.map((item)=>(
                      <>
                      <Image src={urlForImage(item.image).url()} alt={item.title} width={400} height={400} className=" w-80 h-80 hover:w-[22rem] hover:scale-y-110 hover:scale-x-110 duration-300"/>
                      <p className=" text-lg font-bold text-black mt-3">{item.title}</p>
                      <p className=" text-xl font-bold text-black">${item.price}</p>
                      </>
                  ))}
            </Slider>
            </div>
        
      </Wraper>
    </section>

    
  )
}
