import React from 'react'
import logo from "../../assets/images/logo.svg"
import img from "../../assets/images/anis.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
const Header = ({ user}) => {
    const liStyle = 'capitalize text-lg pr-3 font-bold mr-10 '
    return (
        <div className='flex absolute items-center w-full justify-between z-10 py-6 px-4 lg:px-12 '>
            <img src={logo} alt='logo' className='h-8 sm:h-fit'></img>
            <div className='flex h-fit '>
                <ul className='flex items-center mr-20'>
                    <li className={liStyle + ' text-tc-purple-d'}>Home</li>
                    <li className={liStyle + " flex items-center"}>Categories <FontAwesomeIcon icon={faChevronCircleDown} className=' pl-3 text-2xl my-auto cursor-pointer' /></li>

                </ul>
                <button className=' h-fit bg-tc-purple-a py-1 px-9 mr-10 rounded-md shadow-btn text-white text-lg'> Add Code +</button>   
                <div className=' flex items-center text-white pl-10'>
                    <div className='mr-2'>{user.nom}</div>
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                    <img src={img} className=' w-8 mx-4' alt='user img'></img>
                </div>
            </div>
        </div>
    )
}

export default Header