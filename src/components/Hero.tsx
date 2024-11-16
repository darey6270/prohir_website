import {  faLocationPin,  faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='p-5 text-black  md:ml-[340px] mb-32 '>
            <div className='mt-5 max-w-[480px] '>
                <h1 className='text-[33px] md:text-[45px]  font-semibold'>
                Find the best
                <br />
                professionals in South Africa
                </h1>
                <p className='text-[20px] md:text-[30px] font-bold text-gray-400'>Get free quotes within minutes</p>
            </div>

        <div className='flex items-center gap-3 mt-8'>
            <div className='flex'>
                <input className='md:w-[360px] placeholder:text-[15px] focus:border-b-blue-700 focus:border-2 focus:outline-none text-[17px] border border-secondary p-3 rounded-sm shadow-sm shadow-gray-300 w-[260px] placeholder:text-gray-500' placeholder='What Services are you looking For?' type="text" />
                    <div className='hidden md:flex items-center border border-l-0 border-secondary w-fit rounded-r-sm shadow-sm shadow-gray-300'>
                        <FontAwesomeIcon className='mx-2' icon={faLocationPin} />
                        <input placeholder='Postal Code' className='  w-[100px] mr-3 border-none outline-none placeholder:text-[15px] text-[17px] ' type="text" />
                    </div>
            </div>
                <button className='p-3 px-4 md:px-10 bg-blue-700 rounded-sm shadow-sm shadow-blue-500'>
                    <FontAwesomeIcon className='text-white text-[20px] md:hidden' icon={faSearch} />
                    <p className='text-white text-[20px] hidden md:block'>Search</p>
                </button>
        
        </div>

        <div className=' text-gray-500 text-[15px] mt-3 font-semibold'>
            <p>Popular :
                <a  className='' href="#">House Cleaning</a> ,
                <a  className='' href="#">Web Design</a>,
                <a  className='' href="#">Personal Trainers</a>
             </p>
        </div>
    </div>
  )
}