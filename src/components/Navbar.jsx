import React, { useState } from 'react'
import Button from './Button'
import { Link } from "react-scroll"
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
function Navbar() {
    const [click, setClick] = useState(false)
    let navList = [
        {
            link: '/Home',
            li: "Home"
        },
        {
            link: '/About',
            li: "About Us"
        },
        {
            link: '/Contact',
            li: "Contact"
        },
    ]
    const handleClick = (index) => {
        setClick(!click)
    }
    const handleClose = () => {
        setClick(false)

    }
    return (
        <div className='bg-[#020202] border-0 z-[99]  sm:pb-0 pb-[1.5rem]  sm:px-[2rem] px-[1rem] py-[1rem] fixed w-full'>
            {/* desktop */}
            <div className='sm:flex hidden items-center justify-between'>
                <span className='text-white text-[1.3em]'>LOGO</span>
                <ul className='text-white flex items-center gap-[1rem]'>
                    {navList.map((item, index) => (
                        <Link
                            to={`${item.link}`}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                            key={index}
                            className='cursor-pointer hover:opacity-[.4] transition-all'>
                            {item.li}
                        </Link>
                    ))}
                </ul>
                <div className='text-white pb-[1rem]'>
                    <a href='https://www.facebook.com/messages/t/100007557528695' target='_blank' ><Button value={"Join"} /></a>
                </div>
            </div>
            {/* mobile */}
            <div className={`sm:hidden flex  items-center justify-between`}>
                <span className='text-white  text-[1.3em]'>LOGO</span>
                <div className='text-white text-[1.5rem]'>
                    <div onClick={handleClick} className='relative right-6 top-[-.5rem] text-[2rem]'>
                        {!click ? <FaBars className='absolute z-[1]' />
                            : <FaX className='absolute' />}
                    </div>
                </div>
                <div onClick={handleClose} className={`fixed border-2 backdrop-blur-sm bg-black/30 p-[1rem] rounded-lg border-white top-16 right-10 transition-all ${!click ? "translate-x-[200px]" : "translate-x-0"}`}>
                    <ul className='text-white flex flex-col items-center gap-[1rem]'>
                        {navList.map((item, index) => (
                            <Link
                                to={`${item.link}`}
                                spy={true}
                                onClick={handleClose}
                                smooth={true}
                                hashSpy={true}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                key={index}
                                className='cursor-pointer hover:opacity-[.4] transition-all'>
                                {item.li}
                            </Link>
                        ))}
                    </ul>
                    <div className='text-white pb-[1rem]'>
                        <a href='https://www.facebook.com/messages/t/100007557528695' target='_blank' ><Button value={"Join"} /></a>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Navbar
