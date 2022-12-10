import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Meals from './Meals'
import Detail from './Detail';

import Navbar from './Navbar';

const App = () => {
  return (
    <div className='px-20 md:px-30 lg:px-40 lg:container lg:mx-auto  '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Meals />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App