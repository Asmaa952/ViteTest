import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick'



export function CategoriesSlider() {

    const [categories, setCategories] = useState([]);

    async function getCategories(){
        axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((res) => {
           // console.log(res.data.data)
            setCategories(res?.data?.data)
        })
    }

    let {id} = useParams()

    useEffect(() => {
        getCategories()
    }, []);

    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 3
                }    
            },
            {
                breakpoint: 960,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }    
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3
                }    
            }
        ]
    };

  return (
    <>
        <h2 className="m-3 text-2xl font-semibold">Shop Popular Categories:</h2>
        <Slider {...settings}>
            {categories.map((category, index) => {
                return <div key={index} className='cursor-pointer mt-6 '>
                    <Link >
                        <div className='flex flex-col justify-center items-center'>
                           <div className='rounded-full shadow-md shadow-green-400 hover:shadow-green-600 max-w-sm overflow-hidden w-[120px] h-[120px] md:w-[190px] md:h-[190px] xl:h-[200px] xl:w-[200px]'>
                              <img className='rounded-full w-full h-full object-cover hover:scale-110 transition-all' src={category.image} alt="freshcart categories slider imgs" />
                           </div>
                           <div>
                              <h4 className='text-center text-lg my-2'>{category.name}</h4> 
                           </div>
                        </div>
                    </Link>
                </div>
            })}
        </Slider>

    </>
  )
}