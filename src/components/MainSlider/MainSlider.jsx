import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import image1 from '/src/assets/image1.jpg'
import image2 from '/src/assets/image2.jpg'
import image3 from '/src/assets/image3.jpg'
 
 

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }    
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }    
            }
        ]
    
    };
    
  return (<div className="grid grid-cols-5 mb-10 gap-y-2">
    <div className='md:col-span-4 col-span-5 h-full w-full cursor-pointer'>
      <Slider {...settings}>
        <div className='relative'>
          <img src={image1} className='w-full h-[300px] object-fit' alt="cart Images" />
          <div className='absolute top-0 left-0 mx-5 my-1 md:my-5 flex flex-col items-start w-1/2'>
            <h1 className='text-2xl lg:text-4xl xl:text-3xl text-black font-semibold my-2'> You will not be confused to choose anymore, you will like all our products.<br/>any product have an offer <span className='text-green-700'>  50%</span></h1>
            <div className='flex justify-center items-center   px-2 py-1 mt-3 md:mt-5 rounded-lg text-red-800  hover:bg-red-800  bg-white hover:text-white border-spacing-2 border border-red-800'>
            <Link to="/products"><span className='text-lg font-semibold'>Shop Now</span> <i className='fas fa-arrow-right mx-1'></i></Link>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img src={image2} className='w-full h-[300px] object-fit' alt="cart Images" />
          <div className='absolute top-0 right-0 mx-5 my-1 md:my-5 flex flex-col items-start w-1/2'>
            
            <div className='flex justify-center items-center  px-2 py-1 mt-48 md:mt-60 md:me-64   rounded-lg   hover:bg-red-800 text-red-800 hover:text-white border-spacing-2 border border-red-800 text-sm font-medium  bg-white focus:outline-none focus:bg-red-800  focus:text-white'>
              <Link to="/products"><span className='text-lg font-semibold '>Shop Now</span> <i className='fas fa-arrow-right mx-1'></i></Link>
            </div>
          </div>
        </div>

         <div className='relative'>
          <img src={image3} className='w-full h-[300px] object-fit' alt="cart Images" />
          <div className='absolute top-0 right-0 mx-5 my-1 md:my-5 flex flex-col items-start w-1/2'>
            <h1 className='text-2xl lg:text-4xl xl:text-5xl text-white font-semibold my-2'><span className='text-purple-500'> </span> Cash Back on Self-Care Products.</h1>
            <div className='flex justify-center items-center  px-2 py-1 mt-3 md:mt-5  md:ms-40 rounded-lg   hover:bg-red-800 text-red-800 hover:text-white border-spacing-2 border border-red-800 text-sm font-medium  bg-white focus:outline-none focus:bg-red-800  focus:text-white'>
              <Link to="/products"><span className='text-lg font-semibold'>Shop Now</span> <i className='fas fa-arrow-right mx-1'></i></Link>
            </div>
          </div>
        </div>
      </Slider>

    </div>
    
  </div>


)
}

    
  

