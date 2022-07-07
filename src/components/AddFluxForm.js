import React from 'react'

const AddFluxForm = () => {
  return (
    <>
        <h2 className='text-2xl uppercase font-bold text-blue-500'>Nouveau flux</h2>
        <form className='flex flex-col space-y-4 pt-4 lg:flex-row lg:space-x-20 lg:space-y-0 lg:items-center'>
          <label className='flex flex-col'><span className='font-semibold text-lg mr-4'>Date :</span>
            <input className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full lg:w-96' name='date' type='date' />
          </label>

          <label className='flex flex-col'><span className='font-semibold text-lg mr-4'>Libellé :</span>
            <input className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full lg:w-96' name='label' type='text' />
          </label>

          <label className='flex flex-col'><span className='font-semibold text-lg mr-4'>Type :</span>
            <select className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full lg:w-96'>
              <option value='in'>Entrée</option>
              <option value='out'>Sortie</option>
            </select>
          </label>

          <label className='flex flex-col'><span className='font-semibold text-lg mr-4'>Montant :</span>
            <input className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full lg:w-96' name='amount' type='text' />
          </label>

          <button className='mx-auto lg:mx- lg:self-end bg-blue-500 text-white text-lg font-semibold max-w-fit px-4 py-2 hover:bg-blue-600'>Enregistrer</button>
        </form>
    </>
  )
}

export default AddFluxForm