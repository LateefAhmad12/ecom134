import React from 'react'
import Wraper from '../shared/wraper'
import Image from 'next/image'

export default function () {
  return (
    <section className=' mt-14 mb-2'>

        <Wraper>
            <div>
                <h2 className=' text-center text-lg text-blue-700 font-semibold font-sans'>Promotions</h2>
                <h3 className=' text-center text-3xl text-black font-bold capitalize tracking-wide font-serif mt-6'>Our promotion events</h3>
            </div>
            
            <div className=' container flex flex-col lg:grid grid-cols-[50% 25% 25%] gap-4'>
                    {/* start of card number1 */}
                <div className=' bg-gray-300 lg:w-[620px] lg:h-56 overflow-hidden'>
                    <div className=' flex justify-between items-center'>
                    <div className=' px-6'>
                    <h3 className=' text-2xl uppercase font-extrabold text-black max-w-[180px]'>
                        Get Up to <span className=' text-3xl font-extrabold' >60%</span></h3>
                    <p  className=' text-lg font-medium text-gray-800 max-w-[150px]'>For the summer season</p>
                    </div>
                    <div className=''>
                    <Image src={'/event1.webp'} alt='event1'width={200} height={200}
                    className=' w-[300px] h-[230px]'/>
                    </div>
                    </div>
                </div> 
                {/* end of card number 1    */}
                  
                {/* start of card no2 */}
                <div className='bg-black lg:w-[620px] lg:h-52'>
                    <div className=' text-center text-white py-10 space-y-4'>
                        <h4 className='text-3xl font-extrabold'>GET 30% off</h4>
                        <p className=' text-base tracking-tighter font-medium uppercase'>Use Promo Code</p>
                        <button className=' bg-stone-700 px-8 py-1 tracking-tighter rounded-md uppercase'>dine weekend sale</button>
                    </div>

                </div>
                {/* end of card no2 */}
                
                {/* start of card no 3 */}
                <div className='col-start-2 row-start-1 row-end-3 bg-rose-200 lg:h-[448px] lg:w-[310px] overflow-hidden'>
                    <div className='py-6 px-6 '>
                    <p  className=' text-lg text-black capitalize'>Flex Sweatshirt</p>
                    <div className=' flex gap-3'>
                    <h3 className=' text-lg text-black line-through'>$100.00</h3><span className=' font-bold'>$75.00</span>
                    </div>

                    </div>
                    <div className='flex justify-center mt-14'>
                    <Image src={'/event2.webp'} alt='event1' width={200} height={200}
                     className='w-[300px] h-[290px] ' />
                    </div>
                </div>
                {/* end of card no3 */}


                {/* start of card no4 */}
                <div className=' col-start-3 row-start-1 row-end-3 bg-zinc-200 lg:h-[448px] lg:w-[310px] overflow-hidden'>
                    <div className=' py-6 px-6'>
                    <p  className=' text-lg text-black capitalize'>Flex Push Button Bomber</p>
                    <div className=' flex gap-3'>
                    <h3 className=' text-lg text-black line-through'>$225.00 </h3><span className=' font-bold'>$190.00</span>
                    </div>
                    

                    </div>
                    <div className=' flex justify-center mt-14 overflow-hidden'>
                    <Image src={'/event3.webp'} alt='event1' width={200} height={200}
                    className=' w-[300px] h-[290px]' />
                    </div>
                </div>
                {/* end of card no4 */}
                       
                    
                

                
             
                
            </div>
        </Wraper>
    </section>
  )
}
