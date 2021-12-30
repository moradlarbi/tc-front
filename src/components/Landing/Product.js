import React from 'react'
import ReactDom from 'react-dom'
import star from "../../assets/images/Star.png"
import starFull from "../../assets/images/Star-full.png"
const Product = ({product, open, onClose, goSignup}) => {
    if (!open) return null
    return ReactDom.createPortal (
        <div className='w-full h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 z-40'>
            <div className='flex items-center flex-col m-auto pt-6 rounded-3xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <div className=' text-xl w-full text-right pr-2 cursor-pointer' onClick={onClose}>x</div>
                <div className='relative w-full flex'>
                    <img src={product.img} alt='swiper-slide' ></img>
                    <div className='flex items-center flex-col'>
                        <div className=' flex items-center'>
                            <h3 className=' bg-tc-yellow py-1 rounded-3xl text-xs w-fit px-2 h-fit mr-4'>-{product.label}%</h3>
                            <div className=' flex flex-col'>
                                <h3 >"SIRINE12"</h3>
                                <button className=' bg-grey px-4 py-1 rounded-3xl text-sm' onClick={goSignup}>Copy</button>
                            </div>
                        </div>
                        <div className=' w-72 bg-tc-blue-d bg-opacity-20 mx-4 my-5 rounded-xl px-2 py-6'>
                            -23% sur votre achat !
                            iPhone 
                            OLED tout écran
                            Puce A14 Bionic
                            Double appareil photo
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between px-28 py-5'>
                    <button className=' rounded-3xl bg-tc-green px-4 py-1' onClick={goSignup}>Share</button>
                    <button className='rounded-3xl bg-tc-blue-d px-4 py-1' onClick={goSignup}>Save</button>
                </div>
                <div className='flex w-full bg-tc-purple-d rounded-b-3xl text-white py-3 items-center justify-between px-4'>
                    <div className=' flex flex-col'>
                        <div >Expires on : 29/01/2022</div>
                        <div>Use limit: 2</div>
                    </div>
                    <div className='flex flex-col w-ful items-center'>
                        <img src={product.user} alt='user' className=''></img>
                        <div className='font-bold uppercase text-base '>Jumia</div>
                        <button className=' bg-white px-4 py-1 rounded-3xl text-black'>More info</button>
                    </div>
                    <div className=' flex flex-col'>
                        <div >Region : bab ezzouar</div>
                        <div className='flex'>
                            <img src={starFull} alt='starfull'></img>
                            <img src={starFull} alt='starfull'></img>
                            <img src={starFull} alt='starfull'></img>
                            <img src={starFull} alt='starfull'></img>
                            <img src={star} alt='star'></img>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>,
        document.getElementById("popup")
    )
}

export default Product
