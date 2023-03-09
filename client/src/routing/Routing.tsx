import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Register } from '../pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
