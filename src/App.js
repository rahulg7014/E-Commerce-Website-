import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')  // https://fakestoreapi.com/products/1 pehle yeh thi yeh jo /1 hai isko nahi lagana tha
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
