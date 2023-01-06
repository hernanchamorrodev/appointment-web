import React from 'react'
import Complaint from '../Complaint/Complaint'

const ComplaintsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-xl text-center">Listado de reclamos</h2>
      <p className="text-sm mt-5 text-center text-amber-500">
        Administra tus <span className="underline font-bold">reclamos</span>
      </p>
      <Complaint/>
    </div>
  )
}

export default ComplaintsList