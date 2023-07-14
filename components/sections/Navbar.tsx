import Image from "next/image"
import Wraper from "../shared/wraper"
import {MenubarLabel,} from "../ui/menubar"
import{Input} from "../ui/input"
import {CiSearch} from "react-icons/ci"
import {BiCart} from "react-icons/bi"
import Link from "next/link"


function Navbar() {
  return (
    <section>
        <Wraper>
            <div className="max-w[1440px] px-4 py-6 flex items-center justify-between">
        
        
            <div className=" cursor-pointer">
            <Link href={'/'}><Image src="/Logo.webp" alt="DineMarket" width={200} height={200}/></Link>
            </div>
            <div className="hidden md:flex gap-6 ">
                
                <Link href={"/female"}><MenubarLabel className="text-lg font-semibold">
                    Female
                </MenubarLabel></Link>
                <Link href={"/male"}><MenubarLabel className="text-lg font-semibold">
                    Male
                </MenubarLabel></Link>
                <Link href={"/kids"}><MenubarLabel className="text-lg lg:font-semibold">
                    Kids
                </MenubarLabel></Link>
                <Link href={"/allProducts"}><MenubarLabel className="text-lg font-semibold">
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
        
    
            </div>
        </Wraper>
    </section>
  )
}

export default Navbar