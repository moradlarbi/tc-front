import React from 'react'
import logo from "../../assets/images/favicon.png"
const Header = () => {
    const liStyle = 'capitalize text-lg pr-3 font-bold mr-10 '
    return (
        <div className='flex absolute w-full justify-between z-10 py-6 px-12 '>
            <div className=' w-8 h-8'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='flex'>
                <ul className='flex items-center mr-20'>
                    <li className={liStyle + ' text-tc-purple-d'}>Home</li>
                    <li className={liStyle}>About us</li>
                    <li className={liStyle}>Promo codes</li>
                </ul>
                <button className=' bg-tc-purple-a py-1 px-9 mr-10 rounded-md shadow-btn text-white text-lg'> Add Code +</button>    
                <button className=' bg-tc-blue-d py-1 px-9 mr-10 rounded-md shadow-btn2 text-lg'> Sign up</button>  
                <button className=' bg-grey py-1 px-4 mr-10 rounded-md shadow-btn2 text-lg'>
                    Login
                </button>     
            </div>
        </div>
    )
}

export default Header
