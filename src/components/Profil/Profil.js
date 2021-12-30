import { useState } from 'react'
import  Grid  from './Grid.js'
import Header from './Header'
import Hero from './Hero'
import Footer from '../shared/Footer.js'
import img1 from "../../assets/images/p1.png"
import img2 from "../../assets/images/p2.png"
import img3 from "../../assets/images/p3.png"
import img4 from "../../assets/images/p4.png"
import img11 from "../../assets/images/u1.png"
import img21 from "../../assets/images/u2.png"
import img31 from "../../assets/images/u3.png"
import img41 from "../../assets/images/u4.png"
const Profil = ({user}) => {
    const [products, setProducts] = useState([
        {
            img: img1,
            user: img11,
            label: "17"
        },
        {
            img: img2,
            user: img21,
            label: "50"
        },
        {
            img: img3,
            user: img31,
            label: "75"
        },
        {
            img: img4,
            user: img41,
            label: "23"
        },
        {
            img: img1,
            user: img11,
            label: "17"
        },
        {
            img: img2,
            user: img21,
            label: "50"
        },
        {
            img: img3,
            user: img31,
            label: "75"
        },
        {
            img: img4,
            user: img41,
            label: "23"
        },
        
    ])
    return (
        <div className='bg-tc-back relative'>
            <Header user={user} />
            <Hero />
            <Grid products={products} />
            <Footer />
        </div>
    )
}

export default Profil
