import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Logout() {
    let navigate = useNavigate()
        useEffect(()=>{
            localStorage.removeItem('token')
            navigate('/Login')
        })
  return (
    <div>
        
    </div>
  )
}
