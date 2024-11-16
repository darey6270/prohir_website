import React, { useState } from 'react'
import { logo } from '../utils/imgs.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faBook, faBriefcase, faCalendar, faCaretDown, faCaretRight, faCaretUp, faClose, faHeart, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';





type Props = {}

export default function Header({}: Props) {
    const[clickedOption,setclickedOption]=useState(false)
    const[openedMenu,setopenedMenu]=useState(false)

  return (
    <div className='border-b-2 border-gray-100 p-5 justify-between  w-full flex  '>
        <div className='flex items-center justify-center gap-6 '>
            <img src={logo} className='w-[65px] h-[20px] md:w-[106px] md:h-[32px]' alt="logo pic" />
            <div className='md:relative'>
           <button onClick={()=>{setopenedMenu(!openedMenu)}} className='mt-1 flex justify-center  items-center text-[18px] gap-1'>
            Explore
            <FontAwesomeIcon  className={`${openedMenu ? 'relative top-1' : ''}`} icon={openedMenu ? faCaretUp:faCaretDown}  /></button>

            {/* ---------------------modal window---------- */}
            <div className={`${openedMenu ? ' block' : 'opacity-0  hidden'}  w-screen h-screen  ease-in duration-100 absolute left-0 -top-0 md:top-11 md:h-fit md:w-[300px] z-30 bg-white p-5 rounded-sm border border-secondary overflow-hidden`}>
                <div className='relative'>
                      {/* --------------------select option modal  ---------------------- */}
                 <div className={`${!clickedOption ? 'relative' : 'absolute'} top-0  ease-linear duration-300 ${clickedOption ? '-translate-x-[110%]' : 'translate-x-0' } `}>
                 
                            <div className='flex justify-between items-center md:hidden mb-10'>
                                <p className='text-[28px]'>Explore</p>
                                <FontAwesomeIcon onClick={()=>{setopenedMenu(!openedMenu)}} className=' cursor-pointer text-[21px]' icon={faClose} />
                            </div>
                          
                            {/* title */}
                            <div className='flex justify-between items-center'>
                                <p className='text-[18px]'>Services</p>
                                <a className='text-[18px] text-gray-400 underline' href="#">See all</a>
                            </div>
                            {/* service */}
                            <div onClick={()=>{setclickedOption(true)}} className='mt-3  cursor-pointer group text-gray-500    flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon className='group-hover:text-blue-600'  icon={faBriefcase } />
                                         <p className='group-hover:text-black group-hover:underline' >Business</p>
                                    </div>
                                </div>
                                <div>
                                        <FontAwesomeIcon className='group-hover:text-black ' icon={faCaretRight} />
                                </div>
                            </div>
                            {/* service */}
                            <div className='mt-3 cursor-pointer group text-gray-500  flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon  className='group-hover:text-red-500'  icon={faCalendar } />
                                         <p className='group-hover:text-black group-hover:underline'>Events & Entertainers</p>
                                    </div>
                                </div>
                                <div>
                                        <FontAwesomeIcon className='group-hover:text-black ' icon={faCaretRight} />
                                </div>
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group text-gray-500  flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon className='group-hover:text-blue-300' icon={faHeart} />
                                        <p className='group-hover:text-black group-hover:underline'> Health & Wellness</p>
                                    </div>
                                </div>
                                <div>
                                        <FontAwesomeIcon className='group-hover:text-black ' icon={faCaretRight} />
                                </div>
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group  text-gray-500   flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon className='group-hover:text-green-400' icon={faHome } /> 
                                        <p className='group-hover:text-black group-hover:underline'>House & Home</p>
                                    </div>
                                </div>
                                <div>
                                        <FontAwesomeIcon className='group-hover:text-black ' icon={faCaretRight} />
                                </div>
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group  text-gray-500   flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon  className='group-hover:text-purple-300' icon={faBook } />
                                        <p className='group-hover:text-black group-hover:underline'> Lesson & Training</p>
                                    </div>
                                </div>
                                <div>
                                        <FontAwesomeIcon className='group-hover:text-black ' icon={faCaretRight} />
                                </div>
                            </div>
                 
                 </div>
                 {/* --------------------Business modal  ---------------------- */}
                 <div className={`${clickedOption ? 'relative' : 'absolute'} -top-0 ease-linear duration-300    ${clickedOption ? 'translate-x-0' : 'translate-x-[255%]' } `}>
                    {/* back option */}
                    <div className='p-2'>
                        <div className='flex items-center gap-4 '>
                            <FontAwesomeIcon onClick={()=>{setclickedOption(false)}}   className='text-[18px] hover:cursor-pointer'icon={faArrowLeft} />
                            <p onClick={()=>{setclickedOption(false)}} className='text-[21px] hover:cursor-pointer hover:underline'>Back To Explore</p>
                        </div>

                    </div>
                    <div className='border border-gray-100'></div>
                            {/* title */}
                            <div className=' mt-2 flex justify-between items-center'>
                            <div className=' flex gap-5 items-center'>
                                        <FontAwesomeIcon className='text-blue-600 text-[21px]'  icon={faBriefcase } />
                                         <p className='group-hover:text-black group-hover:underline text-[21px]' >Business</p>
                                    </div>
                                <a className='text-[18px] text-gray-400 underline' href="#">See all</a>
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group text-gray-500    flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                         <p className='group-hover:text-black group-hover:underline text-[18px]' >Accounting</p>
                                    </div>
                                </div>
                               
                            </div>
                            {/* service */}
                            <div className='mt-3 cursor-pointer group text-gray-500  flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        
                                         <p className='group-hover:text-black group-hover:underline text-[18px] '>Events & Entertainers</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group text-gray-500  flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                   
                                        <p className='group-hover:text-black group-hover:underline text-[18px]'> Health & Wellness</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group  text-gray-500   flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                        
                                        <p className='group-hover:text-black group-hover:underline text-[18px]'>House & Home</p>
                                    </div>
                                </div>
                               
                            </div>
                            {/* service */}
                            <div className='mt-3  cursor-pointer group  text-gray-500   flex justify-between items-center'>
                                <div>
                                    <div className=' flex gap-5 items-center'>
                                     
                                        <p className='group-hover:text-black group-hover:underline text-[18px]'> Lesson & Training</p>
                                    </div>
                                </div>
                                
                            </div>
                 </div>
                </div>
               
            </div>

           </div>
        </div>

        <div  className='flex md:hidden items-center justify-center gap-5'>
            <FontAwesomeIcon className='hover:text-primary text-[21px]' icon={faSearch} />
            <a href='#'  className='hover:underline   text-[21px]'>Login</a>
        </div>
        {/* ---------------------tablet display-------------------------------  */}
        <div className=' hidden lg:hidden md:flex  items-center justify-center gap-5'>
            <a href='#'  className='hover:underline text-[21px]  '>Login</a>
            <div className='flex gap-2 hover:bg-blue-700 p-1 bg-primary items-center rounded-full px-[10px] shadow-md shadow-blue-500'>
          <span className='w-7 h-7 flex justify-center items-center  bg-white  rounded-full '>
          <FontAwesomeIcon className='text-[15px]  text-blue-700 hover:text-primary' icon={faUser} />
          </span>
                <span className='pr-3 text-white font-semibold text-[15px]'> Join as a Pro</span>
            </div>
        </div>

          {/*-------------------------------------------- desktop display-----------------------------------  */}

        <div className=' hidden lg:flex  items-center justify-center gap-4'>
            <a href='#'  className='hover:underline text-[20px]   '>Login</a>
            <div className='flex gap-5 hover:bg-blue-700 p-1 bg-primary items-center rounded-full px-[10px] shadow-md shadow-blue-500'>
          <span className='w-7 h-7 flex justify-center items-center  bg-white  rounded-full '>
          <FontAwesomeIcon className='text-[15px]  text-blue-700 hover:text-primary' icon={faUser} />
          </span>
                <span className='pr-3 text-white font-semibold text-[15px]'> Join as a professional</span>
            </div>
        </div>



    </div>
  )
}