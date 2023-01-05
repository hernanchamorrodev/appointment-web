import { useState, } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ClaimList from './components/ClaimList/ClaimList'

function App() {

  return (
    <div className="container mt-5">
      <Header />
      <Form />
      <ClaimList />
    </div>
    )
}

export default App
