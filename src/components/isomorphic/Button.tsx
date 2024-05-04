import React from 'react'

import { tv } from 'tailwind-variants'

const buttonStyle = tv({
    base: 'text-white bg-lime-500 rounded-full active:opacity-80',
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-purple-500 text-white"
        }
    }
})

interface ButtonProps {
    children: React.ReactNode,
    color: "primary" | "secondary"
}

export const Button = ({ color, children }: ButtonProps) => {
    return (
        <button className={buttonStyle({ color })}>
            {children}
        </button>
    )
}
