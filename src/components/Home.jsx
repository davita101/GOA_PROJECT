import React, { useEffect } from 'react'
import { avatar, code, code_1 } from '../assets'
import gsap from 'gsap'
function Home() {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 })
        tl.fromTo("#A", { y: 0 }, { y: 40, }, 0)
        tl.fromTo("#A", { y: 40 }, { y: 0, }, 1)

        return () => {
            tl.repeat()
        }
    }, [])


    return (
        <div className=' h-[90vh] pt-[8rem] relative flex items-center justify-center text-white '>
            <img src={code} className='absolute top-12 right-[10rem] w-[150px]' alt='penguin fist' />
            <img src={code_1} className='absolute lg:bottom-[0] bottom-[-5rem] left-[10rem] w-[150px]' alt='penguin second' />
            <div id="A" className='absolute bottom-[-4rem] text-[3em]'>scroll</div>
            <div className='w-[90rem] overflow-hidden '>
                <div className='flex items-center gap-[2rem] justify-center p-[1rem] lg:flex-row flex-col'>
                    <div className='lg:w-[350px] w-[300px]'>
                        <img src={avatar} alt="Davit Grdzelishvili a web developer" className='rounded-2xl' />
                    </div>
                    <div>
                        <h1 className='lg:text-[4em] h-[4rem] text-[2em] text-center font-medium'>Davit Grdzelisili</h1>
                        <h1 className='lg:text-[4em] text-[2em] text-center font-medium'>დავით გრძელიშვილი</h1>
                        <br />
                        <div className=' lg:max-w-full max-w-[350px]'>
                            <p className='lg:text-[1.2em] text-[1em] text-center opacity-[.8]'> Davit Grdzelsivhili Web DeveloperLeader at Goal Oriented Academy</p>
                            <p className='lg:text-[1.2em] text-[1em] text-center opacity-[.8]'> დავით გრძელიშვილი ვებ დეველოპერი Goal Oriented Academy ლიდერი</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
