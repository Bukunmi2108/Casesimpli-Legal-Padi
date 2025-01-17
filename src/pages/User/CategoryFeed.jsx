import React from 'react'
import { Nav, CourseCategoryFeedTemplate } from '../../components'
import { useParams } from 'react-router-dom'

const CategoryFeed = () => {
  const {tag_id} = useParams()
  return (
    <div>
        <Nav />
        <CourseCategoryFeedTemplate tag_id={tag_id} /> 
    </div>
  )
}

export default CategoryFeed