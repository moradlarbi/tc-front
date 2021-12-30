import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import img1 from "../../assets/images/c1.png"
import img2 from "../../assets/images/c2.png"
import img3 from "../../assets/images/c3.png"
import img4 from "../../assets/images/c4.png"
import img5 from "../../assets/images/c5.png"
import img6 from "../../assets/images/c6.png"
import 'swiper/css';
const Categories = () => {
    const imgs = [img1,img2,img3,img4,img5,img6]
    const labels = ["VTC","FOOD","PC","Electroménagers",'Vêtements','Voyages']
    return (
        <div className='w-full py-20'>
            <h1 className='text-4xl text-center text-tc-purple-a mb-20'>Categories</h1>
            <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    imgs.map((img, index) => {
                        return <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <img src={img} alt='swiper-slide' ></img>
                            <h1 className=' mt-4 text-xl font-bold'>{labels[index]}</h1>
                        </div>
                    </SwiperSlide>
                    })
                }
            
            
            
            </Swiper>
        </div>
    )
}

export default Categories
