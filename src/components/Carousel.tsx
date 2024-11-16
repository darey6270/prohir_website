import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import { accountingPic, gardeningPic, houseCleaningPic, personalTrainerPic, webDesignPic } from '../utils/imgs.ts';

type Props = {}
const DesktopSettings ={

    dots: false,
    infinite: true,
    adaptiveHeight:false,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
   autoplaySpeed: 3000,
    
}

export default function Carousel({}: Props) {
  return (
    <div className='p-4'>

        <div className=''>
            <div className='w-full hidden md:block'>
            <Slider {...DesktopSettings} >
                <div className=' cursor-pointer m-2 relative'>
                    <span className=' bg-blue-600 px-3 py-1 rounded-full text-gray-100 absolute top-5 right-[110px] text-[15px]'>Available Online</span>
                    <img src={personalTrainerPic} className='rounded-md' alt="personaltrainerpic" />
                    <span className='text-gray-100 absolute bottom-6 left-4 text-[21px]'>Personal Trainer</span>
                </div>
                <div className= 'cursor-pointer m-4  relative'>
                    <img src={webDesignPic} className='rounded-md' alt="webdesign" />
                    <span className='text-gray-100 absolute bottom-6 left-4 text-[21px]'>Web Design</span>
             
                </div>
                <div className='cursor-pointer m-2  relative w-fit'>
                    <span className=' bg-blue-600 px-3 py-1 rounded-full text-gray-100 absolute top-5 right-[110px] text-[15px]'>Available Online</span>
                    <img src={gardeningPic} className='rounded-md' alt="personaltrainerpic" />
                    <span className='text-gray-100 absolute bottom-6 left-4 text-[21px]'>Gardering</span>
             
                </div>
                <div  className=' cursor-pointer m-4  relative w-fit'>
                    <img src={houseCleaningPic} className='rounded-md' alt="personaltrainerpic" />
                    <span className='text-gray-100 absolute bottom-6 left-4 text-[21px]'>House Cleaning</span>
             
                </div>
                <div  className=' cursor-pointer m-4  relative w-fit'>
                    <span className=' bg-blue-600 px-3 py-1 rounded-full text-gray-100 absolute top-5 right-[110px] text-[15px]'>Available Online</span>
                    <img src={accountingPic} className='rounded-md' alt="personaltrainerpic" />
                    <span className='text-gray-100 absolute bottom-6 left-4 text-[21px]'>Accounting </span>
             
                </div>
            </Slider>
            </div>
          

        </div>

    </div>
  )
}