import React from 'react'
import { useSelector } from 'react-redux'

const FluxList = () => {
    const fluxs = useSelector((state) => state.flux)
  return (
    <>
        <h2 className='text-center text-2xl uppercase font-bold text-emerald-400'>Liste des fluxs</h2>

        <div className='w-full px-2 my-8 max-h-80' style={{"overflowY": "auto"}}>
        <table className='w-full table-auto'>
        <thead>
            <tr>
                <th className='text-emerald-400 bg-slate-50 uppercase py-2'>Date</th>
                <th className='text-emerald-400 bg-slate-50 uppercase py-2'>Libellé</th>
                <th className='text-emerald-400 bg-slate-50 uppercase py-2'>Type</th>
                <th className='text-emerald-400 bg-slate-50 uppercase py-2'>Montant</th>
            </tr>
        </thead>

        <tbody>
            {fluxs.map(flux => (
                <tr key={flux.id} className='bg-emerald-100 hover:bg-emerald-200 text-slate-800 font-semibold border-b-2 border-slate-800'>
                    <td className='pl-4 py-2'>{flux.date}</td>
                    <td className='pl-4 py-2'>{flux.label}</td>
                    <td className='pl-4 py-2'>{flux.type === "in" ? "Entrée" : flux.type === "out" ? "Sortie" : ""}</td>
                    <td className='pl-4 py-2'>{flux.amount}</td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
    </>
  )
}

export default FluxList