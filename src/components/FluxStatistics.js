import React from 'react'
import { useSelector } from 'react-redux'

const FluxStatistics = () => {
    const fluxs = useSelector((state) => state.flux)

    const inAmount = () => {
        let amount = 0
        const inFluxs = fluxs.filter(flux => flux.type === "in")

        inFluxs.forEach(flux => {
            amount += flux.amount
        });

        return amount
    }

    const outAmount = () => {
        let amount = 0
        const inFluxs = fluxs.filter(flux => flux.type === "out")

        inFluxs.forEach(flux => {
            amount += flux.amount
        });

        return amount
    }

    const solde = () => {
        return inAmount() - outAmount()
    }
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
            <td className='bg-green-200 px-4 py-2'>{inAmount()} FCFA</td>
            <td className='bg-red-200 px-4 py-2'>{outAmount()} FCFA</td>
            <td className='bg-blue-200 px-4 py-2'>{solde()} FCFA</td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default FluxStatistics