import React from 'react'
import Btn from './Btn'
import thumbnail from '../assets/blog-img.png'
import { Link } from 'react-router-dom'

const Categories = ({ sidebarState, onClick }) => {

    const Categories = [
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
        'Criminal Law',
        'Law of Torts',
    ]
  return (
    <main className={`${!sidebarState? 'm-0 md:ml-[80px]': 'm-0 md:ml-[200px]'} w-full bg-gray-50 p-4 overflow-x-hidden`} onClick={onClick}>

        <div className='w-full flex items-center justify-center font-lato text-lg p-4 font-bold text-primary-text'>
            All Categories
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center mt-16 gap-2'>
            {
                Categories.map((category, key) => {
                    return(
                        <Link to={`/category/${category}`} key={key}>
                            <div className='p-4 font-inter bg-white'>
                                {category}
                            </div>
                        </Link>
                    )
                })
            }
        </div>

    </main>
  )
}

export default Categories