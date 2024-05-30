import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setData(json))
  })
  return (
    <>
    <Navbar/>
    <Products data = {data}/>
    </>
  )
}
