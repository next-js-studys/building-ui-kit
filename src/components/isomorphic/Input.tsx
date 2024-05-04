import React from 'react'
import { tv } from 'tailwind-variants'


const inputStyle = tv({
    base: "rounded-lg",
    variants: {
        size: {
            sm: "p-1",
            md: "p-2",
            lg: "p-3"
        }
    }
})

interface InputProps {
    size: "sm" | "md" | "lg"
}
export const Input = ({ size }: InputProps) => {
    return (
        <input type="text" className={inputStyle({ size })} />
    )
}
