import React, { useEffect, useState } from 'react'
import {Button} from '../../components'
import tagService from '../../modules/tagService'

const CategoriesTemplate = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchTags = async() => {
      const res = await tagService.getAllTags()
      console.log(res);
      setTags(res)
    }
    fetchTags()
  }, [])

  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-8'>All Categories</h3>


        {tags && <div className='mt-8 flex flex-row flex-wrap gap-2 items-start justify-center mx-auto max-w-4xl w-full'>
          {tags.map((tag) => (
            <span key={tag.id}>
              <Button link={`/category/${tag.id}`} text={tag.name} type='grey-bg'/>
            </span>
          ))}

        </div>}
      </section>
    </main>
  )
}

export default CategoriesTemplate