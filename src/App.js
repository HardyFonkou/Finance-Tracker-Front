import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-blue-500'>Finance Tracker</h1>

      <div className='w-100 p-6 m-6'>
        <h2 className='text-2xl uppercase font-bold text-blue-500'>Nouveau flux</h2>
        <form className='flex flex-col space-y-4 pt-4 lg:flex-row lg:space-x-20 lg:space-y-0 lg:items-center'>
          <label className='flex flex-col'><span className='font-semibold text-lg mr-4'>Date :</span>
            <input className='border shadow-sm border-slate-300 focus:outline-none focus:border-blue-500 rounded-md mt-1 px-4 py-2 w-full lg:w-96' name='date' type='date' />
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
      </div>

      <div className='m-6 p-6 flex flex-col lg:flex-row'>
        <div className='lg:basis-1/2'>
          <h2 className='text-center text-2xl uppercase font-bold text-blue-500'>Liste des fluxs</h2>

          <table className='w-full table-auto my-8'>
            <thead>
              <th className='bg-slate-100 uppercase py-2'>Date</th>
              <th className='bg-slate-100 uppercase py-2'>Libellé</th>
              <th className='bg-slate-100 uppercase py-2'>Type</th>
              <th className='bg-slate-100 uppercase py-2'>Montant</th>
            </thead>

            <tbody>
              <tr className='bg-blue-100 text-blue-600 font-semibold border-b-2 border-white'>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
              </tr>
              <tr className='bg-blue-100 text-blue-600 font-semibold'>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
                <td className='pl-4'>test</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='lg:grow'>
          <h2 className='text-center text-2xl uppercase font-bold text-blue-500'>Statistiques</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
