"use client"
import { useGetProductsQuery } from '@/lib/api/productApi'
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductWrapper = () => {
    const { data } = useGetProductsQuery({ limit: 5 })
    const like = useSelector(state => state.like.value)
    let dispatch = useDispatch()
    return (
        <>
            <div>
                <h2>Product</h2>
                <div>
                    {
                        data?.products?.map((product) => (
                            <div key={product.id}>
                                <Link href={"/"}>
                                    <Image width={200} height={200} alt={product.title} src={product.images[0]} />
                                </Link>
                                <h3>{product.title}</h3>
                                <button onClick={() => dispatch(toggleHeart(product))}>Like</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductWrapper