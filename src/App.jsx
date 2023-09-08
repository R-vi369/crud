import React from 'react'
import './styles/App.scss'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './crud/Create'
import Read from './crud/Read'
import Update from './crud/Update'
import Delete from './crud/Delete'
const App = () => {
  return (
   <>
   
   <Router>
    <Header/>
   <Routes>
       <Route path='/Create' element={<Create/>} />
       <Route path='/Read' element={<Read/>} />
       <Route path='/Update' element={<Update/>} />
       <Route path='/Delete' element={<Delete/>} />
   </Routes>

   </Router>
   
   </>
  )
}

export default App