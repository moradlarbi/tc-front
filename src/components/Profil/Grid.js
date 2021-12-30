import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
const Grid = ({ products }) => {
    return (
        <div className='w-full'>
            <div className=' w-full px-40 flex '>
                <button className=' rounded-3xl bg-white pl-4 pr-2 py-1 mr-10 shadow-btn2 w-32 flex justify-between items-center'> Prix <FontAwesomeIcon icon={faChevronCircleDown} className=' ml-3 text-grey' /></button>
                <button className='rounded-3xl bg-white pl-4 pr-2 py-1 mr-10 shadow-btn2 w-32 flex justify-between items-center'> Catégories <FontAwesomeIcon icon={faChevronCircleDown} className='ml-3 text-grey' /></button>
            </div>
            <div className=' w-full grid gap-5 grid-cols-search px-8 py-10'>
            {
                    products.map((product) => {
                        return <div className='flex flex-col items-center relative'>
                        <img src={product.user} alt='user' className=' absolute right-16 top-3'></img>
                        <img src={product.img} alt='swiper-slide' ></img>
                        <div className='absolute bottom-6 w-full flex items-center flex-col'>
                            <h3 className=' w-fit mt-4 text-sm font-bold bg-tc-yellow rounded-3xl p-1 mb-3 motion-safe:animate-bounce'>-{product.label}%</h3>
                            <h4 className=' w-fit bg-tc-blue-d rounded-3xl p-1 text-xs'>Get the code</h4>
                        </div>
                    </div>
                        
                    })
                }
        </div>
        </div>
        
    )
}

export default Grid
