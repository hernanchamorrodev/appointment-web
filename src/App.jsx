import { useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ComplaintsList from './components/ComplaintsList/ComplaintsList'

function App() {
  const [complaints, setComplaints] = useState([])

  return (
    <div>
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          complaints={complaints}
          setComplaints={setComplaints}
        />
        <ComplaintsList />
          complaints={complaints}
      </div>
    </div>
    )
}

export default App
