import React from 'react'
import { generateId } from '../../utils'

import Complaint from '../Complaint/Complaint'

const ComplaintsList = ({complaints}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {complaints && complaints.length ?
    "Hay reclamos" : "No hay reclamos"  
        }

      <h2 className="font-black text-xl text-center">Listado de reclamos</h2>
      <p className="text-sm mt-5 text-center text-amber-500">
        Administra tus <span className="underline font-bold">reclamos</span>
      </p>
      {
        complaints.map( complaint => (
          <Complaint
            key={complaint.id}
            complaint={complaint}
          />
        ))
      }
    </div>
  )
}

export default ComplaintsList