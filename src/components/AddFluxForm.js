import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addFlux } from '../features/flux/fluxSlice'

const AddFluxForm = () => {
    const dateRef = useRef()
    const labelRef = useRef()
    const typeRef = useRef()
    const amountRef = useRef()
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newFlux = {
            date: dateRef.current.value,
            label: labelRef.current.value,
            type: typeRef.current.value,
            amount: parseInt(amountRef.current.value)
        }

        dispatch(addFlux(newFlux))

        formRef.current.reset()
    }

    const dispatch = useDispatch()
  return (
    <>
        <h2 className='text-2xl uppercase font-bold text-blue-500'>Nouveau flux</h2>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4 pt-4 lg:flex-row lg:space-x-20 lg:space-y-0 lg:items-center'>
          <label className='flex flex-col lg:w-1/5'><span className='font-semibold text-lg mr-4'>Date :</span>
            <input ref={dateRef} className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full' name='date' type='date' />
          </label>

          <label className='flex flex-col lg:w-1/5'><span className='font-semibold text-lg mr-4'>Libellé :</span>
            <input ref={labelRef} className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full' name='label' type='text' />
          </label>

          <label className='flex flex-col lg:w-1/5'><span className='font-semibold text-lg mr-4'>Type :</span>
            <select ref={typeRef} className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full'>
              <option value='in'>Entrée</option>
              <option value='out'>Sortie</option>
            </select>
          </label>

          <label className='flex flex-col lg:w-1/5'><span className='font-semibold text-lg mr-4'>Montant :</span>
            <input ref={amountRef} className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full' name='amount' type='text' />
          </label>

          <button type='submit' className='mx-auto lg:mx- lg:self-end bg-blue-500 text-white text-lg font-semibold max-w-fit px-4 py-2 hover:bg-blue-600'>Enregistrer</button>
        </form>
    </>
  )
}

export default AddFluxForm