"use client"
import Image from "next/image"
import Wraper from "../shared/wraper"
import {Menubar, MenubarLabel,} from "../ui/menubar"
import{Input} from "../ui/input"
import {CiSearch} from "react-icons/ci"
import {BiCart} from "react-icons/bi"
import {AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import Link from "next/link"
import { useState } from "react"






function Navbar() {

    const [nav, setNav] = useState(false);
  return (
    <section>
        <Wraper>
            <div className="max-w[1440px] px-4 py-6 flex items-center justify-between">
        
        
            <div className=" cursor-pointer">
            <Link href={'/'}><Image src="/Logo.webp" alt="DineMarket" width={200} height={200}/></Link>
            </div>
            <div className="hidden md:flex gap-6 ">
                
                <Link href={"/female"}><MenubarLabel className="text-lg font-normal">
                    Female
                </MenubarLabel></Link>
                <Link href={"/male"}><MenubarLabel className="text-lg font-normal">
                    Male
                </MenubarLabel></Link>
                <Link href={"/kids"}><MenubarLabel className="text-lg lg:font-normal">
                    Kids
                </MenubarLabel></Link>
                <Link href={"/products"}><MenubarLabel className="text-lg font-normal">
                    All Products
                </MenubarLabel></Link>
            </div>


            <div className="hidden lg:flex items-center px-2 border border-gray-300 rounded-sm">
                <CiSearch size={15}/>
                <Input className="h-6 w-44 md:w-52 text-xs" placeholder="What do you looking for" />
            </div>

            <div className=" hidden md:flex relative w-12 h-12 rounded-full bg-gray-200  items-center justify-center">
                <div className=" absolute top-1 right-2 text-white text-[8px] bg-red-600 h-4 w-4 rounded-full flex justify-center items-center">0</div>
                <BiCart size={25}/>
            </div>

            
                <div className="flex justify-center items-center text-black cursor-pointer z-30 md:hidden"
                onClick={()=> setNav(!nav)}>
                {nav ? <AiOutlineMenu size={25}/> : <RxCross2 size={25}/>}
                </div>
            
            </div>

            {/* mobile screen */}

            {!nav ?
             <div className=" fixed left-0 top-0 h-screen w-full py-6 flex gap-4 items-center justify-center bg-white md:hidden">
        
        
            {/* <div className=" cursor-pointer">
            <Link href={'/'}><Image src="/Logo.webp" alt="DineMarket" width={200} height={200}/></Link>s
            </div> */}
            <div className="flex flex-col gap-6 ">
                <div className=" order-2 flex flex-col gap-6 items-center justify-center">
                <Link href={"/female"}><MenubarLabel className="text-lg font-normal">
                    Female
                </MenubarLabel></Link>
                <Link href={"/male"}><MenubarLabel className="text-lg font-normal">
                    Male
                </MenubarLabel></Link>
                <Link href={"/kids"}><MenubarLabel className="text-lg lg:font-normal">
                    Kids
                </MenubarLabel></Link>
                <Link href={"/products"}><MenubarLabel className="text-lg font-normal">
                    All Products
                </MenubarLabel></Link>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex order-1 relative w-12 h-12 rounded-full bg-gray-200  items-center justify-center">
                        <div className=" absolute top-1 right-2 text-white text-[8px] bg-red-600 h-4 w-4 rounded-full flex justify-center items-center">0</div>
                        <BiCart size={25}/>
                        </div>
                    </div>
                </div> 

            </div>
            : null}


            {/* <div className="hidden lg:flex items-center px-2 border border-gray-300 rounded-sm">
                <CiSearch size={15}/>
                <Input className="h-6 w-44 md:w-52 text-xs" placeholder="What do you looking for" />
            </div> */}
       
        </Wraper>
    </section>
    
  )
}

export default Navbar