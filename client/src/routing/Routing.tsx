import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register } from '../pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<>log in</>} />
      <Route path="/register" element={<Register />} />
      <Route path="/home">
        <Route path="" element={<>home</>} />
        <Route path="account" element={<>account</>} />
        <Route path=":teamId" element={<>team</>} />
      </Route>
    </Routes>
  )
}

export default Routing
