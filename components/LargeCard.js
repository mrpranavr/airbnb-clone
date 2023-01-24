
import Image from 'next/image'
import React from 'react'

const LargeCard = ({img, title, description, buttonText}) => {
  return (
    <section className='relative my-16 cursor-pointer'>
        {/* image */}
        <div className='relative min-w-[96px] h-96'>
            <Image src={img} fill alt='largeImage' style={{objectFit:'cover'}} className='rounded-2xl' />
        </div>

        {/* Heading */}
        <div className='absolute top-16 left-12'>
            <h3 className='text-3xl mb-3 w-64 font-bold'>{title}</h3>
            <p className='font-semibold'>{description}</p>

            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard