import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Signup from './Signup'
import Login from './Login'
import Categories from './Categories'
import GridProducts from './GridProducts'
import Promos from "./Promos"
import Product from "./Product"
import img1 from "../../assets/images/p1.png"
import img2 from "../../assets/images/p2.png"
import img3 from "../../assets/images/p3.png"
import img4 from "../../assets/images/p4.png"
import img11 from "../../assets/images/u1.png"
import img21 from "../../assets/images/u2.png"
import img31 from "../../assets/images/u3.png"
import img41 from "../../assets/images/u4.png"
import Footer from '../shared/Footer'
const Landing = () => {
    const [loginOpen, setLoginOpen] = useState(false)
    const [signOpen, setSignOpen] = useState(false)
    const [productOpen, setProductOpen] = useState(false)
    const [view, setView] = useState(false)
    const [index, setIndex] = useState(0)
    const products = [
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
    ]
    const [sproducts, setSproducts] = useState([
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
    const [product, setProduct] = useState(products[0])
    useEffect(() => {
        setProduct(products[index])
    }, [index])
    const [ bg, setBg] = useState('')
    return (
        <div className=' bg-tc-back relative' onScroll={()=> {
            setBg('bg-tc-back')
            console.log(bg)
         }}>
            <Header login={setLoginOpen} signup={setSignOpen} bg={bg} />
            <Hero setView={setView} />
            {
                !view &&
                <div className='w-full'>
                    <Promos products={products} setIndex={setIndex} setProductOpen={setProductOpen} />
                </div>
            }
            {
                view &&
                <GridProducts products={sproducts} />
            }
            <Categories />
            <Login open={loginOpen} onClose={() => {setLoginOpen(false)}}/>
            <Signup open={signOpen} onClose={() => {setSignOpen(false)}} goLogin={() => {
                setSignOpen(false)
                setLoginOpen(true)
            }} />
            <Product product={product} open={productOpen} onClose={() => {setProductOpen(false)}} goSignup={() => {
                        setProductOpen(false)
                        setSignOpen(true)
                    }}/>
            <Footer />
        </div>
    )
}

export default Landing
