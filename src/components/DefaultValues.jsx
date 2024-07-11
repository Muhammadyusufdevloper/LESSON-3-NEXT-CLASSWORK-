"use client"
import { defaultCounter } from '@/lib/features/counter/counterSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const DefaultValues = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(defaultCounter(+localStorage.getItem("counter")))
    }, [])
    return null
}

export default DefaultValues