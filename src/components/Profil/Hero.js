import { useState } from 'react'
import bg from "../../assets/images/hero.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import figure from "../../assets/images/figure.png"
const Hero = ({setView}) => {
    const [value, setValue] = useState('')
    const handleChange = e => {
        const { value } = e.target;
        setValue(value)
        if (value === ""){
            setView(false)
        }
        else {
            setView(true)
        }
      };
    return (
        <div className='  relative w-full pt-36'>
            <img src={bg} className=' absolute top-0 right-0 z-0 hidden lg:block' alt='background'></img>
            
            <div className=' rounded-2xl p-3 bg-grey w-fit mx-auto bg-opacity-30'>
                <input value={value} className=' bg-grey pl-4 outline-none bg-opacity-10' placeholder='Rechercher ...' onChange={handleChange}></input>
                <FontAwesomeIcon icon={faSearch} className=' cursor-pointer' />
            </div>
            <div className=' w-full flex justify-center py-10'>
                <img src={figure} alt='figure' className=' w-80'></img>
            </div>
        </div>
    )
}

export default Hero
