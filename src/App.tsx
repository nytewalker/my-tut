import React from 'react'
import Counter from './components/Counter'
import { ThemeContextProvider } from './components/contexts/themeContext'
import { Box } from './components/contexts/Box'
import { GenArray } from './components/generics/GenArray'

const App = () => {
  return (
    <div>
      <h1 className='text-2xl p-4 text-white font-mono bg-slate-400 text-center '>
        Welcome to fedora react-typescript lessons
      </h1>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <GenArray/>
    </div>
  )
}

export default App