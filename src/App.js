import React from 'react';
import './App.css';
import AddFluxForm from './components/AddFluxForm';
import FluxList from './components/FluxList';
import FluxStatistics from './components/FluxStatistics';

function App() {
  return (
    <div className="App bg-gradient-to-t from-slate-900 via-slate-800 to-slate-600 h-screen" style={{"overflow": "auto"}}>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold py-2 text-center text-slate-50 bg-gradient-to-r from-emerald-400 via-red-400 to-blue-400'>Finance Tracker</h1>

        <div className='w-100 p-10 m-6 shadow-md'>
          <AddFluxForm />
        </div>

        <div className='m-6 pt-6 flex flex-col lg:flex-row lg:space-x-20'>
          <div className='p-6 lg:basis-1/2 shadow-md'>
            <FluxList />
          </div>

          <div className='p-6 lg:grow shadow-md'>
            <FluxStatistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
