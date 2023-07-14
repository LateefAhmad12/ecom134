import Image from "next/image";
import Wraper from "../shared/wraper";
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import Link from "next/link";


export default function Footer() {
  return (
    <section className=" mt-20">
        <Wraper>
        <footer className="text-gray-600 ">
  <div className="container px-5 py-24 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-96 flex-shrink-0 md:mx-0 text-left">
      <Link href={'/'} className="flex font-medium items-center md:justify-start text-gray-900">
        <Image src={'/logo.webp'} alt="logo" width={200} height={200}/>
      </Link>
      <p className="mt-10 text-lg font-semibold text-gray-500">
      Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
      </p>
      <div className=" flex gap-6 text-black mt-10">
        <div  className=" w-12 h-12 bg-gray-200 rounded-sm p-4"><BsTwitter size={20}/></div>
        <div className=" w-12 h-12 bg-gray-200 rounded-sm p-4"><FaFacebookF size={20}/></div>
        <div className=" w-12 h-12 bg-gray-200 rounded-sm p-4"><FaLinkedinIn size={20}/></div>
      </div>
    </div>
    <div className="flex-grow flex gap-20 flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
      <div className="lg:w-1/4 md:w-1/3 w-full px-4 ">
        <h2 className="font-bold text-gray-900 tracking-widest text-lg mb-3">Company</h2>
        <nav className="list-none text-lg mb-10">
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">About </Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Terms of Use</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Privacy Policy</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">How it Works</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Contact Us</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="font-bold text-gray-900 tracking-widest text-lg mb-3">Support</h2>
        <nav className="text-lg list-none mb-10">
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Support Center</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">24h Service</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Quick Chat</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="font-bold text-gray-900 tracking-widest text-lg mb-3">Contact</h2>
        <nav className="list-none text-lg mb-10">
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Whatsapp</Link>
          </li>
          <li className=" mb-3">
            <Link href={'#'} className="text-gray-600 hover:text-gray-800 ">Support 24h</Link>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className=" bg-black h-[1px]"></div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row sm:justify-between">
      <p className="text-gray-500 text-lg sm:max-w-[200px] sm:text-left">Copyright © 2023 Dine Market
      </p>
      <div className=" flex sm:max-w-[190px]">
      <p>Design by:</p>
      <span className=" text-black font-bold">PIAIC Design Studio</span>
      </div>
      <div className=" flex sm:max-w-[160px]">
      <p>Coded by</p>
      <span className=" text to-black font-bold">Lateef Ahmad</span>
      </div>
    </div>
  </div>
</footer>
        
        </Wraper>
        
    </section>
  )
}
