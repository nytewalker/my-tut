import React, {useReducer} from 'react'

type counterState = {
    count: number
}


type UpdatecounterAction = {
    value: 'increment'|'decrement';
    payload: number
}

type ResetAction = {
    value: 'reset'
}

type CounterAction = UpdatecounterAction | ResetAction

const InitialState = {count : 0}

// function reducer (state: counterState, action: CounterAction){
//     if (action.value === 'increment'){
//         return {count: state.count + action.payload}
//     }
//     else if (action.value === 'decrement') {
//         return {count : state.count - action.payload}
//     }
//     else if (action.value === 'reset') {
//        return{ count: InitialState}
//     }
//     return state
// }


function reducer (state: counterState, action: CounterAction){
    switch (action.value) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset' :
            return InitialState
        default:
            return state
    }
}




function Counter() {
    const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <div className='flex gap-5 text-xl mt-5  item-center justify-center select-none'>
        <button onClick={() => dispatch({value: 'decrement', payload: 1})} 
            className='bg-slate-400 px-2 text-slate-50 flex items-center justify-center rounded-lg'>-</button>
        <p className='flex items-center justify-center'>Count : {state.count}</p>
        <button onClick={()=> dispatch ({value: 'increment', payload: 1})} 
            className='bg-slate-400 px-2 text-slate-50 flex items-center justify-center rounded-lg'>+</button>
        <button onClick={()=> dispatch ({value: 'reset'})} 
            className='bg-slate-400 px-2 text-slate-50 flex items-center justify-center rounded-lg'>Reset</button>
    </div>
  )
}

export default Counter