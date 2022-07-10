import React from 'react'
import { useSelector } from 'react-redux'

const FluxList = () => {
    const fluxs = useSelector((state) => state.flux)
  return (
    <>
        <h2 className='text-center text-2xl uppercase font-bold text-blue-500'>Liste des fluxs</h2>

        <table className='w-full table-auto my-8'>
        <thead>
            <tr>
                <th className='bg-slate-100 uppercase py-2'>Date</th>
                <th className='bg-slate-100 uppercase py-2'>Libellé</th>
                <th className='bg-slate-100 uppercase py-2'>Type</th>
                <th className='bg-slate-100 uppercase py-2'>Montant</th>
            </tr>
        </thead>

        <tbody>
            {fluxs.map(flux => (
                <tr key={flux.id} className='bg-blue-100 text-blue-600 font-semibold border-b-2 border-white'>
                    <td className='pl-4'>{flux.date}</td>
                    <td className='pl-4'>{flux.label}</td>
                    <td className='pl-4'>{flux.type === "in" ? "Entrée" : flux.type === "out" ? "Sortie" : ""}</td>
                    <td className='pl-4'>{flux.amount}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </>
  )
}

export default FluxList