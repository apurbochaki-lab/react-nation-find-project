import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries';

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

function App() {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Countries Project</h1>

      <Suspense fallback={<h1 style={{color: 'yellow', textAlign: 'center'}}>Wait Data Loading...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
