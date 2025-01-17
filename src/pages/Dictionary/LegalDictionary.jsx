import React from 'react'
import { Nav, LegalDictionaryTemplate } from '../../components'
import { useParams } from 'react-router-dom'

const LegalDictionary = () => {
  const {term} = useParams()

  return (
    <div>
        <Nav />
        <LegalDictionaryTemplate term={term} />
    </div>
  )
}

export default LegalDictionary