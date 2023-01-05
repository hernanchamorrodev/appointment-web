import { useState, } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ClaimList from './components/ClaimList/ClaimList'

function App() {

  return (
    <>
      <Header />
      <Form />
      <ClaimList />
    </>
    )
}

export default App
