"use client"
import { decrement, increment } from '@/lib/features/counter/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    let count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex items-center gap-2'>
                <button className='w-10 h-10 flex items-center justify-center bg-slate-800 text-white' onClick={() => dispatch(increment())}>+</button>
                <div className='w-10 h-10 flex items-center justify-center'>{count}</div>
                <button className='w-10 h-10 flex items-center justify-center bg-slate-800 text-white' disabled={count <= 0} onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

export default Counter