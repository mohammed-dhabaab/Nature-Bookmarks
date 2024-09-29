import React from 'react'
import { Link } from 'react-router-dom'

function Card({ title, link, imageSrc }) {
    return (
        <Link
            to={link}
            className={`relative flex items-center justify-center text-center shadow-xl bg-cover bg-center min-w-[100px] min-h-[70px] md:min-w-[200px] max-w-[300px] md:min-h-[100px] max-h-[200px]  rounded-md cursor-pointer`}
            style={{
                backgroundImage: `url(${imageSrc})`,
            }}
        >
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black h-full w-full opacity-20 '></div>
            <p className='z-10 text-white font-bold'>{title}</p>
        </Link>
    )
}

export default Card
