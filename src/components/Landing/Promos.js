import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
const Promos = ({ products, setIndex, setProductOpen, goSignup }) => {
    return (
        <div className='w-full py-20'>
            <h1 className='text-4xl text-center text-tc-purple-a mb-20'>Codes Promos</h1>
            <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onClick={(swiper) => {
                setIndex(swiper.clickedIndex)
                setProductOpen(true)
            }}
            >
                {
                    products.map((product) => {
                        return <SwiperSlide>
                        <div className='flex flex-col items-center relative'>
                            <img src={product.user} alt='user' className=' absolute right-16 top-3'></img>
                            <img src={product.img} alt='swiper-slide' ></img>
                            <div className='absolute bottom-6 w-full flex items-center flex-col'>
                                <h3 className=' w-fit mt-4 text-sm font-bold bg-tc-yellow rounded-3xl p-1 mb-3 motion-safe:animate-bounce'>-{product.label}%</h3>
                                <h4 className=' w-fit bg-tc-blue-d rounded-3xl p-1 text-xs'>Get the code</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    })
                }
            
            
            
            </Swiper>
        </div>
    )
}

export default Promos
