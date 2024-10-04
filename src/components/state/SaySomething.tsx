import React, { useState } from 'react'
type SaySome = {
    say: string
}
const SaySomething = () => {
    const [justsay, setJustSay] = useState<SaySome | null>(null);
    const SayIt = () => {setJustSay({say: 'You don press am nah, how e be you ode!'})}
    const DontSay = () => {setJustSay(null)}
  return (
    <div>
        <div className='flex justify-center items-center gap-4'>
            <button onClick={SayIt}>Press To Find Out</button>
            <button onClick={DontSay}>Oya clear</button>
        </div>
        <p className='flex flex-col'>word: <span className='text-3xl '>{justsay?.say}</span> </p>
    </div>
  )
}

export default SaySomething