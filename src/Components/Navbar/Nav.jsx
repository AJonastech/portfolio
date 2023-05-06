import React from 'react'
import { Parallax } from 'react-scroll-parallax'
function Nav({children}) {
    return (
       
    <section className='lg:container md:px-10 px-7 mx-auto h-[100vh]'>
           <header className='flex   md:text-xl justify-between items-center  h-[10vh] text-[#0a0430]'>
        <h1 className='font-medium'>Agu Jonas O.</h1>
        <nav className=' md:block'>
            <ul className='flex gap-2 text-lg '>
                <li className='text-purple'>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>

            </ul>
        </nav>
       </header>
       <main>
        {children}
       </main>
    </section>
    

    )
}

export default Nav
