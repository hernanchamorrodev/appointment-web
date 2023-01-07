import { useState, useEffect } from 'react'
import Error from '../Error/Error'

const Form = ({ complaints, setComplaints }) => {
  //TODO Añadir id
  const [nombre, setNombre] = useState('')
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha] = useState('')
  const [informacion, setInformacion] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // validacion formulario
    if ([nombre, titulo, fecha, informacion].includes('')){
      setError(true)
      return
    } 
    setError(false)

    const objComplaint = {
      nombre,
      titulo,
      fecha,
      informacion,
    }

    setComplaints([ ...complaints, objComplaint ])

    // reiniciar el form
    setNombre('')
    setTitulo('')
    setFecha('')
    setInformacion('')

    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-xl text-center">Sistema de reclamos</h2>
      <p className="text-sm mt-5 text-center text-amber-500">
        Añade reclamos y <span className="underline font-bold">administralos</span>
      </p>

      <form className="mt-10 mb-10 mx-10 bg-slate-300 py-6 px-6 border rounded w-full"
        onSubmit={handleSubmit}>
          {error && (
            <Error>Todos los campos son obligatorios</Error>
          )}
        <div className="mb-5">
          <label className="block text-teal-600 text-sm font-bold mb-2" htmlFor="name">
            Nombre completo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className="block text-teal-600 text-sm font-bold mb-2 mt-3" htmlFor="Título reclamo">
            Título reclamo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Título reclamo"
            type="text"
            placeholder="Título reclamo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <label className='block text-teal-600 text-sm font-bold mb-2 mt-3' htmlFor="Fecha">
          Fecha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Fecha"
          type="date"
          placeholder="Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label className='block text-teal-600 text-sm font-bold mb-2 mt-3' htmlFor="Información">
          Información
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Información"
          type="text"
          placeholder="Información"
          value={informacion}
          onChange={(e) => setInformacion(e.target.value)}
        />
          <input
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer transition-all"
          value="Agregar reclamo"
        />     
      </form>
    </div>
  )
}

export default Form