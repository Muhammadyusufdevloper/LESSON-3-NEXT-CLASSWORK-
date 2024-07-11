"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const WishlistWrapper = () => {
    const wishlist = useSelector(state => state.like.value)
    console.log(wishlist);
    return (
        <div>
            {
                wishlist?.map((product) => (
                    <div key={product.id}>
                        <Link href={"/"}>
                            <Image width={200} height={200} alt={product.title} src={product.images[0]} />
                        </Link>
                        <h3>{product.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default WishlistWrapper