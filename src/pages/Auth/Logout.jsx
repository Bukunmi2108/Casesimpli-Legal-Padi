import React, { useEffect } from 'react'
import authService from '../../modules/authService'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    authService.logout()
    alert('Logout Successful')
    navigate('/login')
  }, [])

  return (<></>)
}

export default Logout