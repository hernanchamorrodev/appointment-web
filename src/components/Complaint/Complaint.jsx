import React from 'react'

const Complaint = ({complaint, index}) => {

  const { titulo, fecha, nombre, informacion } = complaint

  return (
    <div className="mt-10 mb-10 mx-20 bg-slate-300 py-6 px-6 border rounded flex flex-col h-auto">
        <div className="flex flex-col justify-between">
          <h3 className="font-bold text-lg text-center">{titulo} - {index}</h3>
          <p>
            <span className="font-bold">Fecha:</span> {fecha}
          </p>
          <p>
            <span className="font-bold">Nombre:</span> {nombre}
          </p>
          <p>
            <span className="font-bold">Información:</span> {informacion}
          </p>
          <div className="flex">
            <button className="bg-teal-50 hover:bg-teal-700 text-teal-700 mr-3 hover:text-white w-full mt-5 p-2 uppercase font-bold cursor-pointer transition-all">
              Editar
            </button>
            <button className="bg-red-50 hover:bg-red-700 text-red-700 w-full mt-5 p-2 hover:text-white uppercase font-bold cursor-pointer transition-all">
              Eliminar
            </button>
          </div>
        </div>
      </div>
  )
}

export default Complaint