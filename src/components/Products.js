import React from 'react'
import { Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            {/* Product Main page */}
            <Outlet />
        </div>
    )
}
