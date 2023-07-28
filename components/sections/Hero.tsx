import React from 'react'
import Wraper from '../shared/wraper'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {BiCart} from "react-icons/bi"



export default function Hero() {
  return (
    <section>
        <Wraper>

        <div className='flex mt-2'>
        {/* left side */}
        <div className='flex flex-col mt-10 justify-evenly sm:flex-1'>
          <div><Badge className=' bg-sky-100 text-blue-700 rounded-md w-28 px-4 py-2 h-10 font-semibold mb-6 text-md'>Sale 70%</Badge></div>
          <div>
            <h1 className="text-4xl font-bold tracking-normal lg:text-6xl max-w-md">
            An Industrial Take on Streetwear
            </h1>
          </div>
          <p className="leading-7 mt-6 max-w-[300px] tracking-normal font-normal text-gray-600 text-md">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>

          <div className=''>
        <Button className='flex h-16 w-32 mt-6 border-[4px] bg-black text-white font-normal border-slate-900'>
         <div><BiCart size={25}/></div>
          <span className=' flex flex-col gap-1 space-x-4'>
            <span>Start</span>
             <span>Shoping</span>
             </span>
        </Button>
        </div>
        </div>
      

{/* right side */}
          <div className=' hidden md:flex flex-col md:flex-1'>
            <div className='w-[550px] h-[550px] rounded-full bg-rose-100 flex-1'>
                <Image src={'/hero.webp'} alt='hero image' width={1000} height={1000}
                className='h-[550px] w-[580px]'/>
            </div>
          </div>
        </div> 

        
        

        <div className='flex flex-wrap items-center gap-x-5 mt-4'>
          <Image src={"/Featured.webp"} alt='featured image' width={120} height={120}/>
          <Image src={"/Featured2.webp"} alt='featured2 image' width={120} height={120}/>
          <Image src={"/Featured3.webp"} alt='featured3 image' width={120} height={120}/>
          <Image src={"/Featured4.webp"} alt='featured4 image' width={120} height={120}/>
        </div>
        </Wraper>
    </section>
  )
}
