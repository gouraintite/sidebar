import React from 'react'
import Banner from '@/public/statics/tip.avif'
import Image from 'next/image'
import { Heart } from 'iconoir-react'

const Annonce = ({className}) => {
  return (
    <div 
        className={`w-ful relative p-4 ${className}`}>
        <div
            className={`w-full`}>
            <div className='w-full relative group overflow-hidden'>
                <div className='w-24 h-24 absolute right-0 z-40 flex cursor-pointer text-white'>
                    <Heart className='ml-9  mt-3' width={40} height={40} />
                </div>
                <div className='relative w-full h-80 z-10'>
                    <Image
                        src={Banner}
                        className='relative object-cover group-hover:scale-110 duration-300 ease-in-out'
                        fill={true}
                    />
                </div>
                <div className='bg-primdark/60 backdrop-blur-sm lg:w-[96%] md:w-[96%] sm:w-[96%] h-1/3 absolute bottom-2 z-40 rounded-2xl flex mx-3 p-3 px-6 text-white'>
                    <div className='w-full'>
                        <div className='flex text-sm space-x-2'>
                            <div className='bg-accent rounded-full p-1 h-fit w-fit'>
                                100% good 
                            </div>
                            <div className='bg-accent rounded-full p-1 h-fit w-fit'>
                                €36,495.00 
                            </div>
                        </div>
                        <p className='lg:text-xl md:text-xl text-sm font-bold pt-1'>
                            Space for the product name and a brief description.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Annonce