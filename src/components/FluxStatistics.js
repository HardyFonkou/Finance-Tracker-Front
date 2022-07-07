import React from 'react'

const FluxStatistics = () => {
  return (
    <>
        <h2 className='text-center text-2xl uppercase font-bold text-blue-500'>Statistiques</h2>

        <table className='table-fix w-full border-separate border-spacing-4'>
        <thead>
            <tr>
                <th className='w-1/3 text-left text-xl'>Entrées</th>
                <th className='w-1/3 text-left text-xl'>Sorties</th>
                <th className='w-1/3 text-left text-xl'>Solde</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className='bg-green-200 px-4 py-2'>10 000 FCFA</td>
            <td className='bg-red-200 px-4 py-2'>10 000 FCFA</td>
            <td className='bg-blue-200 px-4 py-2'>10 000 FCFA</td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default FluxStatistics