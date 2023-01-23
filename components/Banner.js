
import Image from 'next/image'
import React from 'react'

import { Nunito } from '@next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>

        <Image src='https://links.papareact.com/0fm' alt='banner' fill style={{objectFit: 'cover'}} />

        <div className='absolute top-1/2 w-full text-center'>
            <p className={`text-sm sm:text-lg ${nunito.className} font-semibold`}>
                Not sure where to go? Perfect.
            </p>
            <button type='button' className={`${nunito.className} text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-extrabold my-3 hover:shadow-xl hover:scale-105 transition duration-150 ease-in`} >
                I am flexible
            </button>
        </div>

    </div>
  )
}

export default Banner