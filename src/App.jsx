import { useState, } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ClaimList from './components/ClaimList/ClaimList'

function App() {

  return (
    <div className="container mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ClaimList />
      </div>
    </div>
    )
}

export default App
