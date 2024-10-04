import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <h1 className='text-2xl p-4 text-white font-mono bg-slate-400 text-center '>
        Welcome to fedora react-typescript lessons
      </h1>
      <Counter/>
    </div>
  )
}

export default App