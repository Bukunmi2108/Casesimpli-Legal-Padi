import React from 'react'
import Btn from './Btn'
import thumbnail from '../assets/blog-img.png'

const ContentArea = ({ sidebarState }) => {
    const categories = [
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
        'Criminal Law',
    ]

    const Articles = [
        {
            type: 'VIDEO',
            thumbnail: thumbnail,
            title: 'John vs Boris: A Criminal Case Study',
            date: '20th Sept., 2024'
        },
        {
            type: 'ARTICLE',
            thumbnail: thumbnail,
            title: 'John vs Boris: A Criminal Case Study',
            date: '19th Sept., 2024'
        },
        {
            type: 'CASE STUDY',
            thumbnail: thumbnail,
            title: 'John vs Boris: A Criminal Case Study',
            date: '20th Sept., 2020'
        },
        {
            type: 'VIDEO',
            thumbnail: thumbnail,
            title: 'John vs Boris: A Criminal Case Study',
            date: '28th Jan., 2024'
        },
    ]
  return (
    <main className={`${!sidebarState? 'ml-[80px]': 'ml-[200px]'} w-full bg-gray-50 p-4 overflow-x-hidden`}>

        <div className='flex flex-row gap-4 overflow-x-auto'>
            {
                categories.map((category, key) => {
                    return (
                        <div key={key} >
                            <Btn 
                                text={category}
                                classes={'bg-gray-100 rounded-lg py-2 px-4 text-nowrap'}
                            />
                        </div>
                    )
                })
            }
        </div>

        <div className='flex flex-col items-center justify-center mt-16 gap-4'>
            <h3 className='text-xl font-bold font-lato tracking-wide w-full text-left'>Featured Articles</h3>
            
            <div className='flex flex-wrap gap-2'>
                {
                    Articles.map((article, key) => {
                        return (
                            <div className='min-w-[200px] flex-1 p-3 rounded bg-white'>
                                <div className='relative'>
                                    <img src={article.thumbnail} className='w-full object-cover' />
                                    <div className='absolute top-0 left-0 py-2 px-4 bg-white text-sm'>{article.type}</div>
                                </div>

                                <div className='flex flex-col mt-2'>
                                    <h3 className='text-lg font-lato font-bold text-wrap w-full'>{article.title}</h3>
                                    <span className='text-xs font-inter text-primary-text tracking-wider'>{article.date}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Btn 
                text={'See More'}
                classes={'text-primary-blue border border-2 border-primary-blue'}
            />
        </div>

        <div className='flex flex-col items-center justify-center mt-16 gap-4'>
            <h3 className='text-xl font-bold font-lato tracking-wide w-full text-left'>Curated For You</h3>
            
            <div className='flex flex-wrap gap-2'>
                {
                    Articles.map((article, key) => {
                        return (
                            <div className='min-w-[200px] flex-1 p-3 rounded bg-white'>
                                <div className='relative'>
                                    <img src={article.thumbnail} className='w-full object-cover' />
                                    <div className='absolute top-0 left-0 py-2 px-4 bg-white text-sm'>{article.type}</div>
                                </div>

                                <div className='flex flex-col mt-2'>
                                    <h3 className='text-lg font-lato font-bold text-wrap w-full'>{article.title}</h3>
                                    <span className='text-xs font-inter text-primary-text tracking-wider'>{article.date}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Btn 
                text={'See More'}
                classes={'text-primary-blue border border-2 border-primary-blue'}
            />
        </div>

    </main>
  )
}

export default ContentArea