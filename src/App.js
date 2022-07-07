import React from 'react';
import './App.css';
import AddFluxForm from './components/AddFluxForm';
import FluxList from './components/FluxList';
import FluxStatistics from './components/FluxStatistics';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-blue-500'>Finance Tracker</h1>

      <div className='w-100 p-6 m-6'>
        <AddFluxForm />
      </div>

      <div className='m-6 p-6 flex flex-col lg:flex-row lg:space-x-20'>
        <div className='lg:basis-1/2'>
          <FluxList />
        </div>

        <div className='lg:grow'>
          <FluxStatistics />
        </div>
      </div>

    </div>
  );
}

export default App;
