import React from "react";

function getArrays<U>(array: U[]){
    return array
}


export function GenArray () {
    const numbers = [1,2,3]
    const firstNum = getArrays(numbers)

    const strings = ['award', 'warriors', 'victory', 'commends']
    console.log(getArrays(strings))

    console.log(firstNum)
    return (
        <div>

        </div>
    )
}
