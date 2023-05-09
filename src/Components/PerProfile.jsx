import React from 'react'
import {AiOutlineFolder} from "react-icons/ai"
import {CiShare1} from "react-icons/ci"
import Nav from './Navbar/Nav'
import { useEffect, useState } from 'react'
import { client } from '../utils/SanityClient'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
function PerProfile() {
    const [loading, setLoading] = useState(true)
    const [data, setData] =useState([]);
   
    useEffect(()=>{
  const query = `*[_type == 'project']{
    name,
    link,
    description,
    technologies
  }`
  client.fetch(query)
  .then((resp)=> {setData(resp); setLoading(false)})
    },[])
    console.log(data)
    return (
    <Nav>
          <h1 className='text-[28px] md:text-[36px] text-purple  mb-12'> MY PROJECTS/</h1>
    <section className='grid-container min-h-[70vh] mb-8'>
        {
         loading ? (<LoadingSpinner/>)  : data.map((data, id)=>(
                <div key={id} className='shadow-xl  hover:translate-y-[-10px] w-full flex gap-5 flex-col p-5   rounded-md'>
                       <p className='flex justify-between text-[48px] '>
                       <AiOutlineFolder className='text-purple'/>
                        <Link to={data.link} target="_blank"><CiShare1 className='hover:text-purple cursor-pointer'/></Link>  
                       </p>
                       <div>
                        <h2 className='text-xl font-bold mb-2 hover:text-purple cursor-pointer'>{data.name}</h2>
                        <p className='text-gray'>
                           {data.description}
                        </p>
                        <p className='text-[12px] py-4 mt-6 self-end flex gap-2 text-gray flex-wrap'>
                            {
                                data.technologies.map((tech, id)=>(
                                    <span className='lowercase' key={id}>
                                    {tech}
                                </span>
                                ))
                            }
                        </p>
                       </div>
                        </div>))
        }
    </section>
    </Nav>
    )
}

export default PerProfile
