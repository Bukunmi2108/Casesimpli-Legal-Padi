import React from 'react'
import { createContext, useContext } from 'react'

const BackendDomainContext = createContext()

export const BackendDomainProvider = ({children}) => {

  const baseUrl = "http://localhost:8000/api/v1"

  return (
    <BackendDomainContext.Provider value={{baseUrl}}>
      {children}
    </BackendDomainContext.Provider>
  )
}

export const useBackendDomain = () => {
  const context = useContext(BackendDomainContext)
  if (context === undefined) {
    throw new Error('useBackendDomain must be used within an BackendDomainProvider')
  }
  return context
}